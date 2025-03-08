package commands

import (
	"orion/src/data"
	"orion/src/protocol"
	"strings"
	"regexp"
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

	// Perform query optimization
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

	// Normalize spaces and formatting
	query = strings.TrimSpace(query)

	return query // ✅ Fix: Return only the optimized SQL query
}


// HandleCommand processes incoming database commands
// HandleIntelligenceQueryOptimization optimizes query execution for efficiency
// HandleCommand processes incoming database commands
func HandleCommand(cmd []protocol.ORSPValue) protocol.ORSPValue {
	if len(cmd) == 0 {
		return protocol.ErrorValue("ERR no command provided")
	}

	switch strings.ToUpper(string(cmd[0].(protocol.BulkStringValue))) {
	case "IQO-OPTIMIZE":
		response := HandleIntelligenceQueryOptimization(cmd[1:])
		if _, ok := response.(protocol.ErrorValue); ok {
			return response
		}
		// ✅ Fix: Return response as a bulk string to prevent re-parsing
		return protocol.BulkStringValue(response.Marshal())

	default:
		return protocol.ErrorValue("ERR unknown command: " + string(cmd[0].(protocol.BulkStringValue)))
	}
}
