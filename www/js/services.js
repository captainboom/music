angular.module('starter.services', [])

    .factory('Artists', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var artists = [{
            id: 0,
            name: 'A Perfect Circle',
            image: '/images/A Perfect Circle.jpg'
        }, {
            id: 1,
            name: 'After Forever',
            image: '/images/After Forever.jpg'
        }, {
            id: 2,
            name: 'Chimaira',
            image: '/images/Chimaira.jpg'
        }, {
            id: 3,
            name: 'Extreme',
            image: '/images/Extreme.jpg'
        }, {
            id: 4,
            name: 'Oceansize',
            image: '/images/Oceansize.jpg'
        }];

        return {
            all: function () {
                return artists;
            },
            get: function (artistId) {
                for (var i = 0; i < artists.length; i++) {
                    if (artists[i].id === parseInt(artistId)) {
                        return artists[i];
                    }
                }
                return null;
            }
        }
    })

/**
 * A simple example service that returns some data.
 */
    .factory('Albums', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var albums = [{
            id: 0,
            name: '2000 - Mer De Noms',
            image: '/images/2000 - Mer De Noms.jpg'
        }, {
            id: 1,
            name: '2003 - Thirteenth Step',
            image: '/images/2003 - Thirteenth Step.jpg'
        }, {
            id: 2,
            name: '2004 - Amotion',
            image: '/images/2004 - Amotion.jpg'
        }, {
            id: 3,
            name: '2004 - Emotive',
            image: '/images/2004 - Emotive.jpg'
        }];


        return {
            all: function () {
                return albums;
            },
            get: function (albumId) {
                // Simple index lookup
                return albums[albumId];
            }
        }
    });
