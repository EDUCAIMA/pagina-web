import React from 'react';
import Hero             from '../components/Hero';
import Trust            from '../components/Trust';
import Problem          from '../components/Problem';
import HowItWorks       from '../components/HowItWorks';
import AgentFinder      from '../components/AgentFinder';
import ClientsStrip     from '../components/ClientsStrip';
import Solution         from '../components/Solution';
import Integrations     from '../components/Integrations';
import ConnectionsStrip from '../components/ConnectionsStrip';
import Results          from '../components/Results';
import FAQ              from '../components/FAQ';
import CTAFinal         from '../components/CTAFinal';

const HomePage = () => (
    <>
        <AgentFinder />
        <ClientsStrip />
        <Hero />
        <Trust />
        <Problem />
        <HowItWorks />
        <Solution />
        <ConnectionsStrip />
        <FAQ />
        <CTAFinal />
    </>
);

export default HomePage;
