var FavLog;(function(n){var t,i,r;(function(n){n[n.None=0]="None";n[n.SignIn=1]="SignIn";n[n.ShowBalloon=2]="ShowBalloon";n[n.HideBalloon=3]="HideBalloon";n[n.Success=4]="Success";n[n.Failure=5]="Failure";n[n.GroupMenu=6]="GroupMenu";n[n.Enter=7]="Enter";n[n.Back=8]="Back";n[n.Close=9]="Close";n[n.MoveItems=10]="MoveItems";n[n.CreateNewCollection=11]="CreateNewCollection";n[n.DeleteCollection=12]="DeleteCollection";n[n.Selected=13]="Selected";n[n.SelectCollection=14]="SelectCollection";n[n.UnselectCollection=15]="UnselectCollection";n[n.UseForRecommendations=16]="UseForRecommendations";n[n.ManageBar=17]="ManageBar"})(n.Meta||(n.Meta={}));t=n.Meta,function(n){n[n.None=0]="None";n[n.Click=1]="Click";n[n.Visible=2]="Visible";n[n.SignIn=3]="SignIn";n[n.Rename=4]="Rename";n[n.DeleteCollection=5]="DeleteCollection";n[n.Show=6]="Show";n[n.Hide=7]="Hide";n[n.Success=8]="Success";n[n.Failure=9]="Failure"}(n.Type||(n.Type={}));i=n.Type,function(n){n[n.None=0]="None";n[n.ImageViewer=1]="ImageViewer";n[n.Insights=2]="Insights";n[n.StreamAdd=3]="StreamAdd";n[n.StreamRemove=4]="StreamRemove"}(n.Component||(n.Component={}));r=n.Component;n.l=function(n,u,f){var e=['{"T":"CI.'+i[n]+'","Name":"Favorites"'+(u?',"Meta":"'+t[u]+'"':"")+(f?',"Component":"'+r[f]+'"':"")+',"TS":',sb_gt(),"}"];mmLog(e.join(""))}})(FavLog||(FavLog={}))