export default helpers = {
	groupMessages : function(data){
  	let res = data.reduce((prev, cur)=>{
    	let prevConversations = Object.keys(prev);
    		if(prevConversations.includes(cur.subject)){
					prev[cur.subject].push(cur);
    		}
    		else{
      		prev[cur.subject] = [cur];
    		}
    	return prev;
  		}, {})
  	return res;
	},
	getMostRecent : function(groupedData){
  	let res = [];
  	for (var key in groupedData){
    	res.push(groupedData[key]
      	.sort((a,b)=> Date.parse(b.date) - Date.parse(a.date))
      	.shift())
  		}

 		res = res.sort((a,b)=>Date.parse(b.date) - Date.parse(a.date))
  	return res;
	}
}