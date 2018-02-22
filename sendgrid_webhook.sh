function localtunnel {
  lt -s da39a3ee5e6b4b0d --port 5000
}
	until localtunnel; do
	echo "localtunnel server crashed"
	sleep 2
	done