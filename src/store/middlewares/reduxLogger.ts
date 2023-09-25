// eslint-disable-next-line @typescript-eslint/no-var-requires
const {createLogger} = require(`redux-logger`)
const reduxLoggerMW = createLogger({
	collapsed: (logEntry: { error: any }) => !logEntry.error
})

export default reduxLoggerMW
