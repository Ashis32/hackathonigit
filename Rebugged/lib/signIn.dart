import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

final supabase = Supabase.instance.client;

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});

  @override
  State<SignInPage> createState() => _SignInPage();
}

class _SignInPage extends State<SignInPage> {
  String? _userId;

  @override
  void initState() {
    super.initState();
    supabase.auth.onAuthStateChange.listen((data) {
      final user = supabase.auth.currentUser;
      if (user != null) {
        setState(() {
          _userId = user.id;
        });
        _storeUserInDatabase(user);
      }
    });
  }

  Future<void> _nativeGoogleSignIn() async {
    const webClientId =
        '669920565478-rfq2aae8idiuqoif5ft9n361iau629nc.apps.googleusercontent.com';

    final GoogleSignIn googleSignIn = GoogleSignIn(
      serverClientId: webClientId,
    );
    final googleUser = await googleSignIn.signIn();
    final googleAuth = await googleUser?.authentication;
    final accessToken = googleAuth?.accessToken;
    final idToken = googleAuth?.idToken;

    if (accessToken == null || idToken == null) {
      debugPrint('Google Sign-In failed: No Access/ID Token found.');
      return;
    }

    await supabase.auth.signInWithIdToken(
      provider: OAuthProvider.google,
      idToken: idToken,
      accessToken: accessToken,
    );
  }

  Future<void> _storeUserInDatabase(User user) async {
    final email = user.email;
    final name = user.userMetadata?['full_name'] ?? "Unknown";
    final profilePicture = user.userMetadata?['avatar_url'];

    try {
      final existingUser = await supabase
          .from('users')
          .select('id')
          .eq('email', email!)
          .maybeSingle();

      if (existingUser == null) {
        await supabase.from('users').insert({
          'id': user.id,
          'name': name,
          'email': email,
          'profile_picture': profilePicture,
          'created_at': DateTime.now().toIso8601String(),
        });
      }
    } catch (e) {
      debugPrint('Database error: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(_userId ?? 'Not Signed In'),
            ElevatedButton(
              onPressed: () async {
                if (!kIsWeb && Platform.isAndroid) {
                  await _nativeGoogleSignIn();
                } else {
                  await supabase.auth.signInWithOAuth(OAuthProvider.google);
                }
              },
              child: const Text('Sign in With Google'),
            ),
          ],
        ),
      ),
    );
  }
}
