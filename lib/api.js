const API_URL = "https://blirorlegger.no/stand/graphql";

async function fetchAPI(query, { variables } = {}) {
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    });

    const json = await res.json();

    return json.data;
}

export async function getAmbassadorer() {
    const data = await fetchAPI(`
    {
        ambassadorer {
            edges {
                node {
                    id
                    slug
                    title
                    acf {
                        age
                        arbeidsgiver
                        speciality
                        featuredVideo {
                            mediaItemUrl
                        }
                    }
                    videos {
                        questions {
                            question
                            videoUrl
                        }
                    }
                }
            }
        }
    }
    `);

    return data?.ambassadorer.edges;
}
