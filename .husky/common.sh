command_exists () {
  command -v "$1" >/dev/null 2>&1

  if [ $? -eq 0 ]; then
    return 0
  else
    return 1
  fi
}

if command_exists winpty && test -t 1; then
  exec < /dev/tty

  echo "Standard input redirected to /dev/tty due to winpty detection and an interactive terminal."
else
  if ! command_exists winpty; then
    echo "The 'winpty' command was not found on this system."
  fi

  if ! test -t 1; then
    echo "The terminal is not in interactive mode."
  fi
fi
