import { Component, Input } from '@angular/core';
import { Bug } from '../../models/Bug';

@Component({
	selector : 'app-bug-stats',
	templateUrl : 'bugStats.component.html'
})
export class BugStatsComponent{

	@Input('data')
	bugs : Bug[] = [];

	getClosedCount(){
		//console.log('getClosedCount triggered');
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}