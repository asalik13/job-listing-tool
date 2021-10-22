module.exports = {

    /**
     * Takes a date in this format: yyyy-mm-ddThh:mm:ss.mssZ
     * and returns an object with each field
     * 
     * @param {string} date A date string in the format seen above
     * @returns {object} an object with each field of the date, 
     *                   like year, month, day, etc
    */
    parseDate: (date) => {
        const t = date.split('T');
        const dateArr = t[0].split('-');
        const timeArr = t[1].split(':');
        let obj = {
            year: dateArr[0],
            month: dateArr[1],
            day: dateArr[2],
            hour: timeArr[0].startsWith('0') ? timeArr[0].substring(1) : timeArr[0],
            minute: timeArr[1],
            second: timeArr[2].split('.')[0],
            pm: false
        };

        if(obj.hour > 12) {
            obj.hour -= 12;
            obj.pm = true;
        }

        if(obj.hour === 0) {
            obj.hour = 12
        }

        return obj;
    }
}