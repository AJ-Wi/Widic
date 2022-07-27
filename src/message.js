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
  info: message("info", "\x1b[44m"),
  warn: message("warn", "\x1b[43m"),
  error: message("error", "\x1b[41m"),
  success: message("success", "\x1b[42m"),
  debug: message("debug", "\x1b[46m"),
  log: message("log"),
};

module.exports = msg;
