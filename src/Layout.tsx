import * as React from 'react';

type LayoutProps = {
    children : React.ReactNode
}

export default function App (props: Readonly<LayoutProps>) {

  return (
    <>
        <header>
        </header>
        <main>
            {props.children}
        </main> 
    </>
  );
}
