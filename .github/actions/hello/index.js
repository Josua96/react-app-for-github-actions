const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-greet");

  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  // the value of the name variable will not appear in logs since this line mark it as secret
  core.setSecret(name);

  core.startGroup("Logging github object");
  console.log(`Hello ${name}`);
  core.endGroup();

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.exportVariable("HELLO", "hello");

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  // this will inform github that the action has failed
  core.setFailed("ERROR_TEXT_HERE");
}
