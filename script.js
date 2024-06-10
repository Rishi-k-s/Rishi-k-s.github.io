(function() {
    var target = document.currentScript;
    window.addEventListener('load', function() {
        calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nxqrg9jOYXerZyPjhBCTD7JcdWcThPmBAPM2I56ewXyyVFGKixsB2uDQ6XZlDg2BfAt-bwMMY?gv=true',
        color: '#039BE5',
        label: 'Book an appointment',
        target,
        });
    });
    })();