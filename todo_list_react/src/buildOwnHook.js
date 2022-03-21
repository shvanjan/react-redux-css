function FriendStatus({friendId}) {
	const [isOnline, setIsOnline] = React.useState(true);

	function handleStatusChange(status) {
			setIsOnline(status.isOnline);
	}

	useEffect(() => {
		ChatApi.subscribeToFriendStatus(friendId, handleStatusChange);
		
		return () => {
			ChatApi.unSubscribeToFriendStatus(friendId, handleStatusChange);
		}
	}, [friendId]);

	if(isOnline === null) {
		return "Loading...";
	}

	return isOnline;
}