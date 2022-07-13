const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-greet");

  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  // this will inform github that the action has failed
  core.setFailed("ERROR_TEXT_HERE");
}
