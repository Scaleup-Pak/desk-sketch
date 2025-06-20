import Head from 'next/head';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "DeckSketch"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
                    rel="stylesheet"
                />
                <link href="/assets/css/footer2.css" rel="stylesheet" />
            </Head>
        </>
    );
};

export default PageHead;