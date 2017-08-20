"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Zero' },
            { id: 1, name: 'David Bowie' },
            { id: 2, name: 'Interpol' },
            { id: 3, name: 'Erlend Oye' },
            { id: 4, name: 'MontyMechanic' },
            { id: 5, name: 'Svidanie' },
            { id: 6, name: 'Freddy Mercury' },
            { id: 7, name: 'RHCP' },
            { id: 8, name: 'The Beatles' },
            { id: 9, name: 'Prokofiev' },
            { id: 10, name: 'Pompeya' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map