package data

import (
	"errors"
	"strconv"
	"sync"
)

type Store struct {
	mu    sync.Mutex
	items map[string]string
}

var StoreInstance = Store{items: make(map[string]string)}

func (s *Store) Decr(key string) (int, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	val, exists := s.items[key]
	if !exists {
		s.items[key] = "0"
		val = "0"
	}

	num, err := strconv.Atoi(val)
	if err != nil {
		return 0, errors.New("value is not an integer")
	}

	num -= 1
	s.items[key] = strconv.Itoa(num)

	return num, nil
}
