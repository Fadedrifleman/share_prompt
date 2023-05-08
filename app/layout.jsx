import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
	title: 'Promptopia',
	description: 'Discover and Share AI Prompts',
};

const RootLayout = ({children}) => {
	return (
		<html>
			<body>
				<div className='main'>
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    {children}
                </main>
			</body>
		</html>
	);
};

export default RootLayout;
