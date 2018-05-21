export class CronInfo {
    private week: string;
    private month: string;
    private date: string;
    private hour: string;
    private minute: string;
    private second: string;

    private static SECOND = 0;
    private static MINUTE = 0;
    private static HOUR = 0;
    private static DATE = 0;
    private static MONTH = 0;
    private static WEEK = 0;

    constructor() {
        this.week = "*";
        this.month = "*";
        this.date = "*";
        this.hour = "*";
        this.minute = "*";
        this.second = "0";
    }

    public selectWeek(week: Array<boolean>): boolean {
        if (week.length != 7) return false;
        this.week = this.concat(week, 7);
        return true;
    }

    public setWeek(week: number): boolean {
        if (week <= 0 || week > 7) return false;
        this.week = week.toString();
        return true;
    }

    public selectHours(hours: Array<boolean>): boolean {
        if (hours.length != 24) return false;
        this.hour = this.concat(hours, 7);
        return true;
    }

    public setHour(hour: number): boolean {
        if (hour < 0 || hour > 23) return false;
        this.hour = hour.toString();
        return true;
    }

    public selectMinutes(minutes: Array<boolean>): boolean {
        if (minutes.length != 60) return false;
        this.minute = this.concat(minutes, 60);
        return true;
    }

    public setMinute(minute: number): boolean {
        if (minute < 0 || minute > 59) return false;
        this.minute = minute.toString();
        return true;
    }

    private concat(time: Array<boolean>, length: number): string {
        let arr = [];
        for (let i = 0; i < length; i++) {
            if (!!time[i]) {
                arr.push(i + 1);
            }
        }
        return arr.length == length ? "*" : arr.join(",");
    }

    public toString(): string {
        return `${this.second} ${this.minute} ${this.hour} ${this.date} ${this.month} ${this.week}`
    }

    public parse(cronStr: string): void {
        [this.second, this.minute, this.hour, this.date, this.month, this.week] = cronStr.split(" ");
    }

    public toLocalString(): string {
        let week = this.week == "*" ? "每天" : "每周" + this.week;
        let hour = this.hour == "*" ? "每小时" : this.hour;
        let minute = this.minute == "*" ? "每分" : this.minute;
        return `${week}——${hour}时${minute}分`;
    }

    public getWeek(): Array<number> {
        return this.getTime(this.week, 7);
    }

    public getHours(): Array<number> {
        return this.getTime(this.hour, 24);
    }

    public getMinutes(): Array<number> {
        return this.getTime(this.minute, 60);
    }

    private getTime(time: string, count: number): Array<number> {
        if (time == '*') {
            let timeArr = new Array<number>();
            let position = 0;
            while (position < count) {
                timeArr.push(position);
                position++;
            }
            return timeArr;
        } else {
            let timeStrArr = time.split(",");
            let timeArr = new Array<number>();
            for (let timeStr of timeStrArr) {
                if (count == 7) {
                    timeArr.push(parseInt(timeStr) - 1)
                } else {
                    timeArr.push(parseInt(timeStr))
                }
            }
            return timeArr;
        }
    }

}