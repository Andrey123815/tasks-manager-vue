export interface IDataDiff {
    'total': number,
    'days': number,
    'hours': number,
    'minutes': number,
    'seconds': number
}

export function getTimeRemaining(deadlineTime: string, currentTime: Date){
    const t: number = Date.parse(deadlineTime) - currentTime.getTime();
    const seconds: number = Math.floor((t / 1000) % 60);
    const minutes: number = Math.floor((t / 1000 / 60) % 60);
    const hours: number = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days: number = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

export function getDiffTime(diffTime: IDataDiff) {
    return diffTime.days + ' дн ' + diffTime.hours + ' ч ' + diffTime.minutes + ' мин ' + diffTime.seconds + ' с ';
}
