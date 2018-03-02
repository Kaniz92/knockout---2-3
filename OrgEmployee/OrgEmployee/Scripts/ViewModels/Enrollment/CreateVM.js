$(function () {
    ko.applyBindings(CreateVM);
});

var CreateVM = {
    Band: ko.observable(),
    Departments: ko.observableArray([]),
    Department: ko.observable(),
    Employees: ko.observableArray([]),
    employee: ko.observable(),

    SaveEnrollment: function () {
        $.ajax({
            url: '/Enrollment/Create',
            type: 'post',
            dataType: 'json',
            data: ko.toJSON(this),
            contentType: 'application/json',
            success: function (result) {
            },
            error: function (err) {
                console.log('Error: ' + err);
            },
            complete: function () {
                window.location.href = '/Enrollment/Index';
            }
        });
    }

};