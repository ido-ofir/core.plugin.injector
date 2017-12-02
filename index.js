var Injector = require('./Injector.js');


module.exports = {
    name: 'core.injector',
    init(plugin, done) {
        var core = this;
        var injector = Injector();
        core.extend({
            injector,
            require: injector.require
        });
        done(injector);
    }
};