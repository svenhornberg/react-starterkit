import Reflux from 'reflux';
import TimeActions from '../actions/timeActions';

var TimeStore = Reflux.createStore({
    listenables: TimeActions,

    init() {
        this.time = '';
    },

    onCurrenttime() {
        this.time = '13:47';
    }
});

export default TimeStore;
