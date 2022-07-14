#!/bin/sh

echo "::debug  ::My debug message"

echo "::warning  ::A warning is an advice"

echo "::error  ::Error Message"

# marking value as secret
echo "::add-mask::$1"

echo "Hello $1"

time=$(date)

# setting values to the output of the action
echo "::set-output name=time::$time"

# expandable logs

echo "::group::A expandable logs"

echo "testing logs group"

echo "testing logs group 2"

echo "::endgroup::"

# setting an environment variable

# echo "::set-env name=HELLO::hello"

# let github know that the action has failed

# if [ true ]
# then
#   echo 'error'
#   exit 1 # any non-zero exit code means an error
# fi