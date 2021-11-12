const { processMethod } = require('../utils.js');

function processAction(msg, cfg) {
  if (cfg.nodeSettings && cfg.nodeSettings.storeRawRecord) {
      // generate unique id (should be stored and sent to data hub)
      const rawRecordId = uuid.v4()

      this.emit('raw-record', {
        rawRecordId,
        payload: msg.data,
      })
    }

    this.emit('data', msg)
  } catch (e) {
    log.error(`ERROR: ${JSON.stringify(e, undefined, 2)}`)
    throw new Error(e)
  }
}
  return processMethod.call(this, msg, cfg);
}

exports.process = processAction;
