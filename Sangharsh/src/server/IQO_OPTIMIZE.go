package commands

import (
	"orion/src/data"
	"orion/src/protocol"
	"bufio"
	"fmt"
	"net"
	"regexp"
	"strings"
)

// HandleIntelligenceQueryOptimization optimizes query execution for efficiency
func HandleIntelligenceQueryOptimization(args []protocol.ORSPValue) protocol.ORSPValue {
	if len(args) < 1 {
		return protocol.ErrorValue("ERR wrong number of arguments for 'iqo-optimize' command")
	}

	query, ok := args[0].(protocol.BulkStringValue)
	if !ok {
		return protocol.ErrorValue("ERR invalid query format")
	}

	// Return as a BulkStringValue to prevent Orion from misinterpreting it
	optimizedQuery := optimizeSQLQuery(string(query))

	// ✅ Fix: Return as a BulkStringValue to prevent Orion from misinterpreting it
	return protocol.BulkStringValue(optimizedQuery)
}


// optimizeSQLQuery simplifies SQL queries by applying optimizations
// optimizeSQLQuery simplifies SQL queries by applying optimizations
func optimizeSQLQuery(query string) string {
	// Remove redundant WHERE conditions dynamically based on user input
	re := regexp.MustCompile(`(?i)WHERE (.+?) AND \1`)
	query = re.ReplaceAllString(query, "WHERE $1")

	return query // Return only the optimized SQL query
	query = strings.TrimSpace(query)

	return query // ✅ Fix: Return only the optimized SQL query
// HandleCommand processes incoming database commands

// HandleCommand processes incoming database commands
// HandleIntelligenceQueryOptimization optimizes query execution for efficiency
// HandleCommand processes incoming database commands
}
func HandleCommand(cmd []protocol.ORSPValue) protocol.ORSPValue {
	if len(cmd) == 0 {
		return protocol.ErrorValue("ERR no command provided")
	}

	commandStr, ok := cmd[0].(protocol.BulkStringValue)
	if !ok {
		return protocol.ErrorValue("ERR invalid command format")
	}

	// Debugging: Print command to verify

	// ✅ Debugging: Print command to verify
	fmt.Println("Received Command:", commandStr)

	switch commandStr {
	case "IQO-OPTIMIZE":
		return HandleIntelligenceQueryOptimization(cmd[1:])
	default:
		return protocol.ErrorValue("ERR unknown command: " + commandStr)
	}
}
func handleConnection(conn net.Conn) {
	defer conn.Close()
	reader := bufio.NewReader(conn)

	for {
		value, err := protocol.Unmarshal(reader)
		if err != nil {
			fmt.Println("Error reading input:", err)
			return
		}

		command, args, err := parseORSPCommand(value)
		if err != nil {
			response := protocol.ErrorValue(err.Error())
			conn.Write([]byte(response.Marshal()))
			continue
		// Debugging: Print received command

		// ✅ Debugging: Print received command
		fmt.Printf("Received command: %s\n", command)

		fullArgs := append([]protocol.ORSPValue{protocol.BulkStringValue(command)}, args...)
		response := HandleCommand(fullArgs)
		conn.Write([]byte(response.Marshal()))
	}
}
}
