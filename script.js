let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendarByMonth(year, month) {
    // Updating display style of navigation buttons based on the current date

    // Calculating the number of days in the given month
    const dayInMonth = new Date(year, month + 1, 0).getDate();

    const weekdayOnFirst = new Date(year, month, 1).getDay();
    const weekdayOnLast = new Date(year, month, dayInMonth).getDay();

    let htmlCalendarContent = '';

    // Add empty div to align weekdays before month start
    for (let i = 1; i <= weekdayOnFirst; i++) {
        htmlCalendarContent += `
        <div class="date,empty"></div> 
        `;
    }

    for (let i = 1; i <= dayInMonth; i++) {
        htmlCalendarContent += `
        <div class="date">
            <strong>${i}</strong>
        </div> 
        `;
    }

    // Add empty dif to complete table after month end
    for (let i = 1; i < 7 - weekdayOnLast; i++) {
        htmlCalendarContent += `
         <div class="date,empty"></div> 
         `;
    }

    document.getElementById('calendarGrid').innerHTML = htmlCalendarContent;
    document.getElementById('currentDate').innerText = `${monthNames[month]} ${year}`;
}

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdaysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

document.getElementById('previous').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendarByMonth(currentYear, currentMonth);
});

document.getElementById('next').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendarByMonth(currentYear, currentMonth);
});

generateCalendarByMonth(currentYear, currentMonth);
