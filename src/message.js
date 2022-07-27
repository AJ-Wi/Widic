// @ts-check

/**
 * Message Global
 * @param {string} type message type
 * @param {string} style message style
 * @returns {function}
 */
function message(type, style = "") {
  /** @param {string} msg */
  return (msg) => {
    console.log(`${style} ${type}: ${msg} \x1b[0m`);
  };
}

const msg = {
  info: message("info", "\x1b[34m"),
  warn: message("warn", "\x1b[33m"),
  error: message("error", "\x1b[31m"),
  success: message("success", "\x1b[32m"),
  debug: message("debug", "\x1b[36m"),
  log: message("log"),
};

module.exports = msg;
