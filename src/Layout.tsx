import * as React from 'react';

type LayoutProps = {
    children : React.ReactNode
}

export default function Layout (props: Readonly<LayoutProps>) {

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
