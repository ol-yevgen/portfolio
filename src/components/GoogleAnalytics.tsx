"use client";
import Head from "next/head";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
    return (
        <Head>
            <script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} async/>
            <script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}');
                `}
            </script>
        </Head>
    );
};

export default GoogleAnalytics;
