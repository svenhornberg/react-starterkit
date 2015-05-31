import Reflux from 'reflux';
import TimeActions from '../actions/timeActions';

var TimeStore = Reflux.createStore({

    init() {
        this.time = [];

        this.listenTo(TimeActions.currenttime, this.currenttime);
    },

    currenttime() {
        this.time = '13:47';
    }
});

export default TimeStore;