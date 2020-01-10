const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
);

const App = () => (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
        <RefinementList attribute="brand" />
    </InstantSearch>
);