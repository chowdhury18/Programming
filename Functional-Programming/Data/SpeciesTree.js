const categories = [
    { 'id': 'animals', 'parent': null },
    { 'id': 'mammals', 'parent': 'animals' },
    { 'id': 'cats', 'parent': 'mammals' },
    { 'id': 'dogs', 'parent': 'mammals' },
    { 'id': 'chihuahua', 'parent': 'dogs' },
    { 'id': 'siamese', 'parent': 'cats' },
    { 'id': 'laberador', 'parent': 'dogs' },
    { 'id': 'persian', 'parent': 'cats' }

];

export default categories;