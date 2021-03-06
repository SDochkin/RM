import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { Main } from './pages/Main';

import { client } from './api/apolloClient';

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Main />
		</ApolloProvider>
	);
};

export default App;
