import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName){
		return function(p1, p2){
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}
	private getDescendingComparerFor(comparer){
		return function(p1, p2){
			return comparer(p1, p2) * -1;
	    }
	}
	transform(data : any[] = [], attrName : string, descending : boolean = false ) : any[] {
		if (!attrName ) return data;
		let comparer = this.getComparerFor(attrName);
		if (descending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}