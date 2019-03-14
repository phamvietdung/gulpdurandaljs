define(['durandal/app', 'jquery', 'bootstraptable', 'plugins/http', 'knockout'], function (app, $, bootstraptable, http, ko) {

    ko.bindingHandlers.bootstrapdatatables = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var el = $(element);
            var unwrap = ko.unwrap(valueAccessor());

            $(document).ready(function(){
                el.bootstrapTable(unwrap);
            });
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        }
    }

    var ctor = function () {

        var self = this;

        self.getData = function (callback) {
            http.get("data.json").done(function (xhr) {
                callback.success({
                    total: 100,
                    rows: xhr.filter(function (x) { return x.id == 1 }),
                });
            });
        }

        self.table = {
            url : 'data.json',
            //ajax: self.getData,
            pagination: true,
            sidePagination: 'server',
            search: true,
            columns: [
                {
                    title: "Id",
                    field: "id"
                },
                {
                    title: "Name",
                    field: "name"
                }
            ],
            minimumCountColumns : true
        };

        this.attached = function () {

            var $table = $('#table')

            var options = {
                //url: 'data.json',//self.getData,
                ajax: self.getData,
                pagination: true,
                sidePagination: 'server',
                search: true,
                column: [
                    {
                        title: "Id",
                        field: "id"
                    },
                    {
                        title: "Name",
                        field: "name"
                    }
                ]
            }

            $table.bootstrapTable(options);

        }
    };
    return ctor;
});