import {faker} from '@faker-js/faker';

const AgeCerifications = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'U', 'U/A', 'A', 'S', 'AL', '6', '9', '12', '12A', '15', '18', '18R', 'R18', 'R21', 'M', 'MA15+', 'R16', 'R18+', 'X18', 'T', 'E', 'E10+', 'EC', 'C', 'CA', 'GP', 'M/PG', 'TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 'TV-MA'];
const Genres = [
    'Action film',
    'Adventure film',
    'Animated film',
    'Comedy film',
    'Drama',
    'Fantasy film',
    'Historical film',
    'Horror film',
    'Musical film',
    'Noir film',
    'Romance film',
    'Science fiction film',
    'Thriller film',
    'Western',
]
const Roles = [
    'Director',
    'Producer',
    'Screenwriter',
    'Actor',
    'Actress',
    'Cinematographer',
    'Film Editor',
    'Production Designer',
    'Costume Designer',
    'Music Composer'
];

export function generateTitle() {
    const year = faker.date.past({years: 9999}).getFullYear();

    return {
        id: parseInt(faker.helpers.uniqueArray(faker.number.int, 8).join()),
        title: faker.music.songName(),
        description: faker.commerce.productDescription(),
        release_year: year >= 0 ? `${year} AD` : `${year * -1} BC`,
        age_certification: faker.helpers.arrayElement(AgeCerifications),
        runtime: faker.helpers.rangeToNumber({min: 30, max: 222}),
        genres: faker.helpers.arrayElements(Genres, {min: 1, max: 4}),
        production_country: faker.location.countryCode('alpha-3'),
        seasons: faker.helpers.rangeToNumber({min: 1, max: 33})
    }
}

export function generateCredit(titleId) {
    const sex = faker.person.sexType();

    return {
        id: parseInt(faker.helpers.uniqueArray(faker.number.int, 8).join()),
        title_id: titleId,
        real_name: faker.person.fullName({sex}),
        character_nane: faker.person.fullName({sex}),
        role: faker.helpers.arrayElement(Roles),
    }
}
