
var Language = {
	informarion: "Information",
	error: "Error",
	warning: "Warning",
	confirmation: "Confirmation",
	yes: "Yes",
	no: "No",
	start: "Iniciar",
	stop: "Parar",
	server: "Server",
	reload: "Reload",
	initializing: "Initializing",
	create: "Create",
	uninitialized: "Uninitialized",
	online: "On Line",
	loaded: "Loaded",
	interactive: "Interactive",
	complete: "Complete",
	authenticationRequired: "Authentication Required",
	authentication: "Authentication",
	user: "User",
	secret: "Secret",
	login: "Login",
	logout: "Logout",
	send: "Send",
	clear: "Clear",
	monastError: "MonAst Error",
	errorMessage: "Error Message",
	connectionError: "Could not connect to http://#{HOSTNAME}:#{HOSTPORT} (#{RESPONSE}).<br>Make sure monast.py is running so the panel can connect to its port properly.",
	requestError: "The request to http://#{HOSTNAME}:#{HOSTPORT}/isAuthenticated was not found.<br>Make sure monast.py is running so the panel can connect to its port properly.",
	internalServerError: "We got an \"Internal Server Error\" connecting to http://#{HOSTNAME}:#{HOSTPORT}/isAuthenticated.<br>Please lookup log file and report errors at http://monast.sf.net",
	requestStatusError: "An error ocurred while requesting status!<br>Please press F5 to reload MonAst.",
	invalidUsernameSecret: "Invalid Username/Secret",
	youMustDefineAnUser: "You must define an user",
	userNotDefined: "User not defined!",
	authenticatingPleaseWait: "Authenticating, please wait...",
	authenticatedReloading: "Authenticated, reloading...",
	loggingOutPleaseWait: "Logging out, please wait...",
	reloadNeeded: "Reload needed, Press F5.",
	reloadingPleaseWait: "Reloading, please wait...",
	reloadRequestedPleaseWait: "Reload requested, please wait...",
	changingServer: "Changing Server...",
	cannotChangeServerOfflineReload: "Can not change server, Monast is offline...<br>Please reload...",
	
	mixedPannels: "Mixed Pannels",
	peersUsers: "Peers/Users",
	peerUser: "Peer/User",
	meetmeRooms: "Conference Rooms",
	meetme: "Conference",
	parkedCallAt: "Parked Call at",
	parkedCalls: "Parked Calls",
	parkedCalls2: "Parked Calls",
	queues: "Queues",
	asteriskCli: "Asterisk CLI",
	debug: "Debug",
	pannelsToShow: "Pannels to Show",
	
	from: "From",
	to: "To",
	
	noGroup: "No Group",
	originateCall: "Originate Call",
	viewPeerCalls: "View User/Peer Channels/Calls",
	viewPeerInfo: "View User/Peer Info",
	execute: "Execute",
	sendResetToModem: "Send Reset Command to Modem",
	reallyResetModem: "Do you really need to reset this channel?",
	turnMemberOf: "Turn Member of",
	turnMemberOfQueue: "Turn this User Member of Queue \"#{QUEUENAME}\"?",
	removeMemberFrom: "Remove Member from",
	removeMemberFromQueue: "Remove this User Member from Queue \"#{QUEUENAME}\"?",
	meetmeInvite: "Conference Invite",
	inviteTo: "Invite to",
	inviteToMeetme: "Invite this User/Peer to Conference \"#{MEETME}\"",
	inviteNumbers: "Invite Numbers",
	inviteNumbersToMeetme: "Invite Numbers to Conference",
	inviteCallToMeetme: "Invite this Call to Conference \"#{MEETME}\"?",
	numbers: "Numbers",
	onePerLine: "one per line",
	ifNotExistsCreateDynamic: "if this conference does not exists,<br>a dynamic one will be created",
	meetmeUser: "Conference User",
	kickUser: "Kick User",
	viewMeetmeUserInfo: "View User Info",
	requestMeetmeKickFrom: "Request Kick to this User from Conference \"#{MEETME}\"?",
	userNumber: "User Number",

	uniqueid: "Uniqueid",
	sourceUniqueid: "Source Uniqueid",
	destinationUniqueid: "Destination Uniqueid",
	
	noActivePeerCalls: "No Active Channels/Calls for this User/Peer",
	notValidCalleridNumber: "This User/Peer does not have a valid callerid number to transfer to",
	
	selectActionForChannel: "Select Action for Channel #{UNIQUEID} (#{CHANNEL})",
	selectActionForCall: "Select Action for Call #{UNIQUEID} -&gt; #{BRIDGEDUNIQUEID}",
	selectChannelToTransfer: "Select Channel to Transfer",
	selectChannelToPark: "Select Channel to Park",
	
	hangup: "Hangup",
	requestHangupChannel: "Request Hangup to this Channel?",
	requestHangupCall: "Request Hangup to this Call?",
	requestHangupParkedCall: "Request Hangup to this Parked Call?",
	
	channel: "Channel",
	channels: "Channels",
	channelType: "Channel Type",
	channelName: "Channel Name",
	channelVariables: "Channel Variables",
	channelsCalls: "Channels/Calls",
	channelMonitored: "Channel Monitored",
	channelSpyed: "Channel Spyed",
	sourceChannel: "Source Channel",
	destinationChannel: "Destination Channel",
	
	viewChannelInfo: "View Channel Info",
	viewCallInfo: "View Call Info",
	viewParkedCallInfo: "View Parked Call Info",
	
	transfer: "Transfer",
	transferCall: "Transfer Call",
	transferDestination: "Transfer Destination",
	transferParkedCall: "Transfer Parked Call",
	requestTransferParkedCallTo: "Request Transfer this Parked Call to User/Peer \"#{CALLERID}\"?",
	
	reallyTransferChannelTo: "Do you really want to transfer channel \"#{CHANNEL}\" to \"#{CALLERID}\"?",
	
	noSpyerNumber: "No Spyer Number Specified!",
	
	spy: "Spy",
	spyed: "Spyed",
	spyer: "Spyer",
	spyerNumber: "Spyer Number",
	requestSpyChannel: "Request Spy to this Channel?",
	requestSpyCall: "Request Spy to this Call?",

	park: "Park",
	
	monitored: "Monitored",
	monitorStart: "Start Monitor",
	monitorStop: "Stop Monitor",
	monitorToThisChannel: "Monitor to this Channel?",
	
	peerName: "Peer Name",
	peerContext: "Peer Context",
	
	callerid: "Callerid",
	calleridName: "Callerid Name",
	calleridNumber: "Callerid Number",
	sourceCallerid: "Source Callerid",
	destinationCallerid: "Destination Callerid",
	
	status: "Status",
	state: "State",
	
	activeCalls: "Active Calls",
	
	call: "Call",
	calls: "call(s)",
	calls2: "Calls",
	callsAbreviated: "call(s)",
	callStatus: "Call Status",
	callDuration: "Call Duration",
	
	exten: "Exten",
	
	parkedFrom: "Parked From",
	parkedChannel: "Parked Channel",
	parkedCalleridName: "Parked Callerid Name",
	parkedCalleridNumber: "Parked Callerid Number",
	parkedFromCalleridName: "Parked From, Callerid Name",
	parkedFromCalleridNumber: "Parked From, Callerid Number",
	
	timeout: "Timeout",
	
	latency: "Latency",
	
	queue: "Queue",
	queueMember: "Queue Member",
	queueClient: "Queue Client",
	statistics: "Statistics",
	max: "Max",
	maxCalls: "Max Calls",
	holdtime: "Holdtime",
	talktime: "Talktime",
	completed: "Completed",
	completedCalls: "Completed Calls",
	abandoned: "Abandoned",
	abandonedCalls: "Abandoned Calls",
	serviceLevel: "Service Level",
	serviceLevelPerf: "Service Level Perf.",
	weight: "Weight",
	members: "Members",
	clients: "Clients",
	nameLocation: "Location/Name",
	callsTaken: "Calls Taken",
	callsTaken2: "Calls Taken",
	lastCall: "Last Call",
	penalty: "Penalty",
	addExternalMember: "Add External Member",
	viewQueueInfo: "View Queue Info",
	memberName: "Member Name",
	memberLocation: "Member Location",
	membership: "Membership",
	locationFormat: "Format: Local/&lt;external_number&gt;@&lt;context&gt;",
	stateInterface: "State Interface",
	answered: "Answered",
	paused: "Paused",
	pauseMember: "Pause Member",
	unpauseMember: "Unpause Member",
	pauseThisMember: "Pause this Queue Member?",
	unpauseThisMember: "Unpause this Queue Member?",
	removeMember: "Remove Member",
	removeMemberFromQueue: "Remove this Member from Queue \"#{QUEUENAME}\"?",
	viewMemberInfo: "View Member Info",
	viewClientInfo: "View Client Info",
	dropClient: "Drop Client (Hangup)",
	dropThisQueueClient: "Drop this Queue Client?",
	position: "Position",
	waitingSince: "Waiting Since",
	
	createDynamicMeetme: "Create Dynamic Conference",
	meetme: "Conference",
	
	// Only used on other languages
	_statusMap: {
		"down": "down",
		"unregistered": "unregistered",
		"unreachable": "unreachable",
		"unknown": "unknown",
		"unavailable": "unavailable",
		"invalid": "invalid",
		"busy": "busy",
		"logged out": "logged out",
		"red alarm": "red alarm",
		"ring": "ring",
		"ringing": "ringing",
		"ring, in use": "ring, in use",
		"in use": "in use",
		"dial": "dial",
		"dialing": "dialing",
		"lagged": "lagged",
		"on hold": "on hold",
		"off hook": "off hook",
		"yellow alarm": "yellow alarm",
		"dnd enabled": "dnd enabled",
		"blue alarm": "blue alarm",
		"up": "up",
		"link": "link",
		"unlink": "unlink",
		"registered": "registered",
		"reachable": "reachable",
		"unmonitored": "unmonitored",
		"not in use": "not in use",
		"logged in": "logged in",
		"no alarm": "no alarm",
		"on hook": "on hook",
		"signal": "signal"
	}
};
