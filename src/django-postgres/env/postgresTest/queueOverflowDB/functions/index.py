from datetime import datetime, timedelta

def calculateNDaysAgo(createdAt):
    today = datetime.today().strptime(datetime.today().strftime('%Y-%m-%d %H:%M:%S.%f'),'%Y-%m-%d %H:%M:%S.%f')
    createDate = datetime.strptime(createdAt, '%Y-%m-%dT%H:%M:%S.%fZ')
    n = 7
    final_time = createDate + timedelta(hours=n)
    
    duration = today - final_time
    duration_in_s = duration.total_seconds()
    String = str(int(duration_in_s)) + ' second'
    unit = "second"

    if duration_in_s > 1 and duration_in_s < 60: #seconds
        String += 's'

    if duration_in_s >= 60 and unit == "second": # minute
        duration_in_s /= 60
        String = str(int(duration_in_s)) + ' minute'
        unit = "minute"
        if duration_in_s > 1 and duration_in_s < 60:
            String += 's'

    if duration_in_s >= 60 and unit == "minute": # hour
        duration_in_s /= 60
        String = str(int(duration_in_s)) + ' hour'
        unit = "hour"
        if duration_in_s > 1 and duration_in_s < 60:
            String += 's'
    
    if duration_in_s >= 24 and unit == "hour": # days
        duration_in_s /= 24
        String = str(int(duration_in_s)) + ' day'
        unit = "day"
        if duration_in_s > 1 and duration_in_s < 24:
            String += 's'

    return String + " ago"