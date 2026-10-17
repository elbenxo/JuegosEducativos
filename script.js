(() => {
    'use strict';

    // === Listas de palabras para el juego de Lengua ===
    // Cada palabra se escribe en minúsculas; "upper" indica si la primera
    // letra debería ir en mayúscula según las reglas del castellano.
    // Reglas usadas:
    //   - Nombres propios (personas, ciudades, países): mayúscula
    //   - Sustantivos comunes: minúscula
    //   - Días y meses: minúscula
    //   - Idiomas y nacionalidades: minúscula
    //   - Colores y números: minúscula
    const LANG_WORDS = [
        // --- Nombres propios de persona (MAYÚSCULA) ---
        { word: 'maría', upper: true }, { word: 'juan', upper: true },
        { word: 'pedro', upper: true }, { word: 'ana', upper: true },
        { word: 'carlos', upper: true }, { word: 'lucía', upper: true },
        { word: 'sofía', upper: true }, { word: 'pablo', upper: true },
        { word: 'laura', upper: true }, { word: 'marta', upper: true },
        { word: 'diego', upper: true }, { word: 'elena', upper: true },
        { word: 'andrés', upper: true }, { word: 'javier', upper: true },
        { word: 'alberto', upper: true }, { word: 'beatriz', upper: true },
        { word: 'cristina', upper: true }, { word: 'daniel', upper: true },
        { word: 'eduardo', upper: true }, { word: 'fátima', upper: true },
        { word: 'gabriel', upper: true }, { word: 'hugo', upper: true },
        { word: 'irene', upper: true }, { word: 'jorge', upper: true },
        { word: 'leticia', upper: true }, { word: 'manuel', upper: true },
        { word: 'natalia', upper: true }, { word: 'óscar', upper: true },
        { word: 'patricia', upper: true }, { word: 'raquel', upper: true },
        { word: 'sergio', upper: true }, { word: 'teresa', upper: true },
        { word: 'víctor', upper: true }, { word: 'alicia', upper: true },
        { word: 'bruno', upper: true }, { word: 'carmen', upper: true },
        { word: 'david', upper: true }, { word: 'eva', upper: true },
        { word: 'fernando', upper: true }, { word: 'héctor', upper: true },
        { word: 'isabel', upper: true }, { word: 'mario', upper: true },
        { word: 'noelia', upper: true }, { word: 'paula', upper: true },
        { word: 'raúl', upper: true }, { word: 'silvia', upper: true },
        { word: 'tomás', upper: true }, { word: 'miguel', upper: true },
        { word: 'nuria', upper: true }, { word: 'ramón', upper: true },

        // --- Nombres propios de lugar (MAYÚSCULA) ---
        { word: 'madrid', upper: true }, { word: 'barcelona', upper: true },
        { word: 'sevilla', upper: true }, { word: 'valencia', upper: true },
        { word: 'españa', upper: true }, { word: 'europa', upper: true },
        { word: 'francia', upper: true }, { word: 'italia', upper: true },
        { word: 'portugal', upper: true }, { word: 'londres', upper: true },
        { word: 'parís', upper: true }, { word: 'roma', upper: true },
        { word: 'méxico', upper: true }, { word: 'argentina', upper: true },
        { word: 'bilbao', upper: true }, { word: 'zaragoza', upper: true },
        { word: 'málaga', upper: true }, { word: 'granada', upper: true },
        { word: 'toledo', upper: true }, { word: 'salamanca', upper: true },
        { word: 'oviedo', upper: true }, { word: 'santander', upper: true },
        { word: 'alemania', upper: true }, { word: 'japón', upper: true },
        { word: 'china', upper: true }, { word: 'brasil', upper: true },
        { word: 'perú', upper: true }, { word: 'chile', upper: true },
        { word: 'colombia', upper: true }, { word: 'cuba', upper: true },
        { word: 'ecuador', upper: true }, { word: 'uruguay', upper: true },
        { word: 'asia', upper: true }, { word: 'áfrica', upper: true },
        { word: 'berlín', upper: true }, { word: 'lisboa', upper: true },
        { word: 'dublín', upper: true }, { word: 'andalucía', upper: true },
        { word: 'galicia', upper: true }, { word: 'cataluña', upper: true },
        { word: 'ebro', upper: true }, { word: 'duero', upper: true },
        { word: 'tajo', upper: true }, { word: 'pirineos', upper: true },

        // --- Sustantivos comunes (minúscula) ---
        // animales
        { word: 'perro', upper: false }, { word: 'gato', upper: false },
        { word: 'caballo', upper: false }, { word: 'vaca', upper: false },
        { word: 'cerdo', upper: false }, { word: 'oveja', upper: false },
        { word: 'cabra', upper: false }, { word: 'gallina', upper: false },
        { word: 'conejo', upper: false }, { word: 'ratón', upper: false },
        { word: 'elefante', upper: false }, { word: 'jirafa', upper: false },
        { word: 'león', upper: false }, { word: 'tigre', upper: false },
        { word: 'oso', upper: false }, { word: 'lobo', upper: false },
        { word: 'zorro', upper: false }, { word: 'ardilla', upper: false },
        { word: 'búho', upper: false }, { word: 'águila', upper: false },
        { word: 'pájaro', upper: false }, { word: 'mariposa', upper: false },
        { word: 'abeja', upper: false }, { word: 'hormiga', upper: false },
        { word: 'pez', upper: false }, { word: 'ballena', upper: false },
        { word: 'delfín', upper: false }, { word: 'tortuga', upper: false },
        { word: 'rana', upper: false }, { word: 'serpiente', upper: false },
        // comida
        { word: 'pan', upper: false }, { word: 'leche', upper: false },
        { word: 'queso', upper: false }, { word: 'huevo', upper: false },
        { word: 'jamón', upper: false }, { word: 'pollo', upper: false },
        { word: 'carne', upper: false }, { word: 'pescado', upper: false },
        { word: 'arroz', upper: false }, { word: 'sopa', upper: false },
        { word: 'tomate', upper: false }, { word: 'manzana', upper: false },
        { word: 'naranja', upper: false }, { word: 'pera', upper: false },
        { word: 'fresa', upper: false }, { word: 'uva', upper: false },
        { word: 'sandía', upper: false }, { word: 'melón', upper: false },
        { word: 'limón', upper: false }, { word: 'plátano', upper: false },
        { word: 'patata', upper: false }, { word: 'lechuga', upper: false },
        { word: 'chocolate', upper: false }, { word: 'galleta', upper: false },
        { word: 'helado', upper: false }, { word: 'pastel', upper: false },
        { word: 'miel', upper: false }, { word: 'agua', upper: false },
        // objetos / casa / ciudad
        { word: 'casa', upper: false }, { word: 'puerta', upper: false },
        { word: 'ventana', upper: false }, { word: 'mesa', upper: false },
        { word: 'silla', upper: false }, { word: 'cama', upper: false },
        { word: 'lámpara', upper: false }, { word: 'cocina', upper: false },
        { word: 'baño', upper: false }, { word: 'jardín', upper: false },
        { word: 'libro', upper: false }, { word: 'cuaderno', upper: false },
        { word: 'mochila', upper: false }, { word: 'lápiz', upper: false },
        { word: 'goma', upper: false }, { word: 'regla', upper: false },
        { word: 'pizarra', upper: false }, { word: 'tijeras', upper: false },
        { word: 'pelota', upper: false }, { word: 'bicicleta', upper: false },
        { word: 'coche', upper: false }, { word: 'autobús', upper: false },
        { word: 'tren', upper: false }, { word: 'avión', upper: false },
        { word: 'barco', upper: false }, { word: 'colegio', upper: false },
        { word: 'parque', upper: false }, { word: 'plaza', upper: false },
        { word: 'tienda', upper: false }, { word: 'hospital', upper: false },
        { word: 'museo', upper: false }, { word: 'estación', upper: false },
        { word: 'calle', upper: false },
        // naturaleza
        { word: 'árbol', upper: false }, { word: 'flor', upper: false },
        { word: 'hoja', upper: false }, { word: 'río', upper: false },
        { word: 'mar', upper: false }, { word: 'montaña', upper: false },
        { word: 'playa', upper: false }, { word: 'bosque', upper: false },
        { word: 'lluvia', upper: false }, { word: 'nieve', upper: false },
        { word: 'viento', upper: false }, { word: 'nube', upper: false },
        { word: 'estrella', upper: false }, { word: 'cielo', upper: false },
        { word: 'tierra', upper: false }, { word: 'fuego', upper: false },
        { word: 'arena', upper: false },
        // cuerpo
        { word: 'mano', upper: false }, { word: 'pie', upper: false },
        { word: 'ojo', upper: false }, { word: 'nariz', upper: false },
        { word: 'boca', upper: false }, { word: 'oreja', upper: false },
        { word: 'brazo', upper: false }, { word: 'pierna', upper: false },
        { word: 'cabeza', upper: false }, { word: 'dedo', upper: false },
        { word: 'diente', upper: false },
        // familia
        { word: 'madre', upper: false }, { word: 'padre', upper: false },
        { word: 'hermano', upper: false }, { word: 'hermana', upper: false },
        { word: 'abuelo', upper: false }, { word: 'abuela', upper: false },
        { word: 'tío', upper: false }, { word: 'tía', upper: false },
        { word: 'primo', upper: false }, { word: 'prima', upper: false },
        { word: 'hijo', upper: false }, { word: 'hija', upper: false },

        // --- Días de la semana (minúscula) ---
        { word: 'lunes', upper: false }, { word: 'martes', upper: false },
        { word: 'miércoles', upper: false }, { word: 'jueves', upper: false },
        { word: 'viernes', upper: false }, { word: 'sábado', upper: false },
        { word: 'domingo', upper: false },

        // --- Meses (minúscula) ---
        { word: 'enero', upper: false }, { word: 'febrero', upper: false },
        { word: 'marzo', upper: false }, { word: 'abril', upper: false },
        { word: 'mayo', upper: false }, { word: 'junio', upper: false },
        { word: 'julio', upper: false }, { word: 'agosto', upper: false },
        { word: 'septiembre', upper: false }, { word: 'octubre', upper: false },
        { word: 'noviembre', upper: false }, { word: 'diciembre', upper: false },

        // --- Idiomas y nacionalidades (minúscula) ---
        { word: 'español', upper: false }, { word: 'inglés', upper: false },
        { word: 'francés', upper: false }, { word: 'italiano', upper: false },
        { word: 'alemán', upper: false }, { word: 'chino', upper: false },
        { word: 'japonés', upper: false }, { word: 'ruso', upper: false },
        { word: 'portugués', upper: false }, { word: 'árabe', upper: false },
        { word: 'mexicano', upper: false }, { word: 'argentino', upper: false },
        { word: 'colombiano', upper: false }, { word: 'peruano', upper: false },
        { word: 'chileno', upper: false },

        // --- Colores (minúscula) ---
        { word: 'rojo', upper: false }, { word: 'azul', upper: false },
        { word: 'verde', upper: false }, { word: 'amarillo', upper: false },
        { word: 'blanco', upper: false }, { word: 'negro', upper: false },
        { word: 'marrón', upper: false }, { word: 'gris', upper: false },
        { word: 'morado', upper: false },

        // --- Números (minúscula) ---
        { word: 'uno', upper: false }, { word: 'dos', upper: false },
        { word: 'tres', upper: false }, { word: 'cuatro', upper: false },
        { word: 'cinco', upper: false }, { word: 'seis', upper: false },
        { word: 'siete', upper: false }, { word: 'ocho', upper: false },
        { word: 'nueve', upper: false }, { word: 'diez', upper: false },
    ];

    // === Oraciones para el juego de Inglés ===
    // Cada oración tiene dos huecos (___) y dos palabras correctas en orden.
    // El "pool" contiene las dos correctas + cuatro distractores plausibles.
    // Las oraciones llevan algo de contexto para que el niño se ayude a
    // deducir qué palabra falta.
    const ENGLISH_SENTENCES = [
        // --- Statements ---
        { text: 'Every morning I ___ a ___ for breakfast.',
          correct: ['eat', 'banana'],
          pool: ['eat', 'run', 'sleep', 'banana', 'school', 'happy'] },
        { text: 'My sister and I ___ to ___ every day.',
          correct: ['go', 'school'],
          pool: ['go', 'is', 'are', 'school', 'apple', 'red'] },
        { text: 'On weekends we always ___ in the big ___.',
          correct: ['play', 'park'],
          pool: ['play', 'eat', 'are', 'park', 'book', 'fast'] },
        { text: 'My grandma always ___ me a nice ___ at night.',
          correct: ['tells', 'story'],
          pool: ['tells', 'flies', 'runs', 'story', 'dog', 'blue'] },
        { text: 'The big black ___ is sleeping on the ___.',
          correct: ['cat', 'sofa'],
          pool: ['cat', 'school', 'fast', 'sofa', 'eat', 'blue'] },
        { text: 'After dinner my dad ___ a ___ to me in bed.',
          correct: ['reads', 'book'],
          pool: ['reads', 'flies', 'eats', 'book', 'sky', 'red'] },
        { text: 'I really ___ to swim in the ___ in summer.',
          correct: ['like', 'sea'],
          pool: ['like', 'am', 'do', 'sea', 'school', 'fast'] },
        { text: 'My best friend has two ___ and a small ___.',
          correct: ['cats', 'dog'],
          pool: ['cats', 'eats', 'blue', 'dog', 'fly', 'are'] },
        { text: 'From here we can ___ a really big ___.',
          correct: ['see', 'mountain'],
          pool: ['see', 'is', 'do', 'mountain', 'apple', 'red'] },
        { text: 'Birds usually ___ very high in the blue ___.',
          correct: ['fly', 'sky'],
          pool: ['fly', 'is', 'are', 'sky', 'school', 'red'] },
        { text: 'On my birthday my mum ___ a chocolate ___.',
          correct: ['makes', 'cake'],
          pool: ['makes', 'flies', 'runs', 'cake', 'dog', 'blue'] },
        { text: 'My new bike is ___ and very ___.',
          correct: ['blue', 'fast'],
          pool: ['blue', 'eat', 'do', 'fast', 'school', 'are'] },
        { text: 'Every night before bed I ___ my ___.',
          correct: ['brush', 'teeth'],
          pool: ['brush', 'is', 'are', 'teeth', 'school', 'red'] },
        { text: 'The little baby is ___ in his soft ___.',
          correct: ['sleeping', 'bed'],
          pool: ['sleeping', 'is', 'fast', 'bed', 'apple', 'red'] },
        { text: 'Today the weather is ___ and very ___.',
          correct: ['sunny', 'warm'],
          pool: ['sunny', 'eat', 'are', 'warm', 'dog', 'run'] },

        // --- Questions ---
        { text: 'Do you ___ any pets at your ___?',
          correct: ['have', 'home'],
          pool: ['have', 'are', 'do', 'home', 'fast', 'blue'] },
        { text: 'Can you please ___ me the ___?',
          correct: ['pass', 'salt'],
          pool: ['pass', 'is', 'are', 'salt', 'school', 'red'] },
        { text: 'What is your favourite ___ of the ___?',
          correct: ['day', 'week'],
          pool: ['day', 'is', 'are', 'week', 'dog', 'blue'] },
        { text: 'Where did you ___ that lovely red ___?',
          correct: ['buy', 'hat'],
          pool: ['buy', 'is', 'are', 'hat', 'school', 'red'] },
        { text: 'How many ___ are in your school ___?',
          correct: ['books', 'bag'],
          pool: ['books', 'is', 'are', 'bag', 'school', 'red'] },
        { text: 'Are you ___ to my birthday ___ tomorrow?',
          correct: ['coming', 'party'],
          pool: ['coming', 'is', 'do', 'party', 'school', 'red'] },
        { text: 'When does your sister ___ to ___ in the morning?',
          correct: ['go', 'school'],
          pool: ['go', 'is', 'are', 'school', 'dog', 'red'] },
        { text: 'Why is the little ___ ___ so much today?',
          correct: ['boy', 'crying'],
          pool: ['boy', 'is', 'are', 'crying', 'school', 'red'] },
        { text: 'Does your dog ___ in the ___ at night?',
          correct: ['sleep', 'garden'],
          pool: ['sleep', 'is', 'do', 'garden', 'school', 'red'] },
        { text: 'Who is the ___ in the red ___ over there?',
          correct: ['girl', 'dress'],
          pool: ['girl', 'is', 'are', 'dress', 'school', 'red'] },
    ];

    // === Oraciones para el juego de Present Simple vs Present Continuous ===
    // Cada oración tiene un hueco (___) y el verbo entre paréntesis como pista.
    // El niño elige la forma correcta entre 4 opciones. Las palabras clave
    // ("now", "right now", "Look!", "at the moment" → continuous;
    //  "always", "every day", "usually", "on Sundays" → simple) ayudan a decidir.
    const VERB_SENTENCES = [
        // --- Present continuous (acción que ocurre ahora) ---
        { text: 'Look! The baby ___ (cry) right now.',
          correct: 'is crying', options: ['is crying', 'cries', 'crying', 'are crying'] },
        { text: 'Listen! The birds ___ (sing) in the tree.',
          correct: 'are singing', options: ['are singing', 'sing', 'is singing', 'sings'] },
        { text: 'Right now I ___ (eat) an ice cream.',
          correct: 'am eating', options: ['am eating', 'eat', 'is eating', 'eating'] },
        { text: 'Look at Tom! He ___ (run) very fast.',
          correct: 'is running', options: ['is running', 'runs', 'run', 'are running'] },
        { text: 'The children ___ (play) in the park now.',
          correct: 'are playing', options: ['are playing', 'play', 'is playing', 'plays'] },
        { text: 'Be quiet! Mum ___ (sleep) at the moment.',
          correct: 'is sleeping', options: ['is sleeping', 'sleeps', 'sleep', 'are sleeping'] },
        { text: 'Look! It ___ (rain) outside now.',
          correct: 'is raining', options: ['is raining', 'rains', 'rain', 'are raining'] },
        { text: 'We ___ (watch) a film right now.',
          correct: 'are watching', options: ['are watching', 'watch', 'is watching', 'watches'] },
        { text: 'She ___ (wear) a red dress today.',
          correct: 'is wearing', options: ['is wearing', 'wears', 'wear', 'are wearing'] },
        { text: 'Dad ___ (cook) dinner at the moment.',
          correct: 'is cooking', options: ['is cooking', 'cooks', 'cook', 'are cooking'] },
        { text: 'The dog ___ (swim) in the lake now.',
          correct: 'is swimming', options: ['is swimming', 'swims', 'swim', 'are swimming'] },
        { text: 'I ___ (do) my homework right now.',
          correct: 'am doing', options: ['am doing', 'do', 'does', 'is doing'] },
        { text: 'They ___ (have) fun on the swings now.',
          correct: 'are having', options: ['are having', 'have', 'has', 'is having'] },
        { text: 'Look! Grandpa ___ (read) the newspaper now.',
          correct: 'is reading', options: ['is reading', 'reads', 'read', 'are reading'] },

        // --- Present simple (rutinas y hechos) ---
        { text: 'Every morning I ___ (brush) my teeth.',
          correct: 'brush', options: ['brush', 'brushes', 'am brushing', 'brushing'] },
        { text: 'My dad always ___ (drink) coffee.',
          correct: 'drinks', options: ['drinks', 'drink', 'is drinking', 'drinking'] },
        { text: 'We ___ (go) to school every day.',
          correct: 'go', options: ['go', 'goes', 'are going', 'going'] },
        { text: 'My friend ___ (live) in Madrid.',
          correct: 'lives', options: ['lives', 'live', 'is living', 'living'] },
        { text: 'Cats ___ (like) milk.',
          correct: 'like', options: ['like', 'likes', 'are liking', 'liking'] },
        { text: 'He never ___ (eat) fish.',
          correct: 'eats', options: ['eats', 'eat', 'is eating', 'eating'] },
        { text: 'The sun ___ (rise) in the morning.',
          correct: 'rises', options: ['rises', 'rise', 'is rising', 'rising'] },
        { text: 'On Sundays we ___ (visit) my grandma.',
          correct: 'visit', options: ['visit', 'visits', 'are visiting', 'visiting'] },
        { text: 'My sister ___ (play) tennis every week.',
          correct: 'plays', options: ['plays', 'play', 'is playing', 'playing'] },
        { text: 'I usually ___ (walk) to the park.',
          correct: 'walk', options: ['walk', 'walks', 'am walking', 'walking'] },
        { text: 'Birds ___ (fly) south in winter.',
          correct: 'fly', options: ['fly', 'flies', 'are flying', 'flying'] },
        { text: 'My mum ___ (work) in a hospital.',
          correct: 'works', options: ['works', 'work', 'is working', 'working'] },

        // --- Verbo "to be" ---
        { text: 'Today it ___ (be) sunny.',
          correct: 'is', options: ['is', 'are', 'am', 'be'] },
        { text: 'We ___ (be) at the park now.',
          correct: 'are', options: ['are', 'is', 'am', 'be'] },

        // --- Más present continuous ---
        { text: 'Look! My brother ___ (draw) a picture now.',
          correct: 'is drawing', options: ['is drawing', 'draws', 'drawing', 'are drawing'] },
        { text: 'Right now the cat ___ (climb) the tree.',
          correct: 'is climbing', options: ['is climbing', 'climbs', 'climb', 'are climbing'] },
        { text: 'Listen! Someone ___ (knock) at the door.',
          correct: 'is knocking', options: ['is knocking', 'knocks', 'knock', 'are knocking'] },
        { text: 'The students ___ (write) a test at the moment.',
          correct: 'are writing', options: ['are writing', 'write', 'is writing', 'writes'] },
        { text: 'Look! The plane ___ (fly) over our house now.',
          correct: 'is flying', options: ['is flying', 'flies', 'fly', 'are flying'] },
        { text: 'I ___ (drink) a glass of milk right now.',
          correct: 'am drinking', options: ['am drinking', 'drink', 'is drinking', 'drinking'] },
        { text: 'She ___ (dance) on the stage now.',
          correct: 'is dancing', options: ['is dancing', 'dances', 'dance', 'are dancing'] },
        { text: 'We ___ (wait) for the bus at the moment.',
          correct: 'are waiting', options: ['are waiting', 'wait', 'is waiting', 'waits'] },
        { text: 'Look! The dog ___ (chase) the ball now.',
          correct: 'is chasing', options: ['is chasing', 'chases', 'chase', 'are chasing'] },
        { text: 'My parents ___ (talk) on the phone right now.',
          correct: 'are talking', options: ['are talking', 'talk', 'is talking', 'talks'] },
        { text: 'He ___ (paint) the wall at the moment.',
          correct: 'is painting', options: ['is painting', 'paints', 'paint', 'are painting'] },
        { text: 'The baby ___ (smile) at us now.',
          correct: 'is smiling', options: ['is smiling', 'smiles', 'smile', 'are smiling'] },
        { text: 'Look! It ___ (snow) outside now.',
          correct: 'is snowing', options: ['is snowing', 'snows', 'snow', 'are snowing'] },
        { text: 'They ___ (build) a sandcastle on the beach now.',
          correct: 'are building', options: ['are building', 'build', 'is building', 'builds'] },
        { text: 'I ___ (listen) to music right now.',
          correct: 'am listening', options: ['am listening', 'listen', 'is listening', 'listening'] },
        { text: 'The teacher ___ (explain) the lesson now.',
          correct: 'is explaining', options: ['is explaining', 'explains', 'explain', 'are explaining'] },
        { text: 'Right now we ___ (have) lunch in the garden.',
          correct: 'are having', options: ['are having', 'have', 'has', 'is having'] },
        { text: 'Look! Sara ___ (ride) her bike now.',
          correct: 'is riding', options: ['is riding', 'rides', 'ride', 'are riding'] },
        { text: 'The boys ___ (swim) in the pool at the moment.',
          correct: 'are swimming', options: ['are swimming', 'swim', 'is swimming', 'swims'] },
        { text: 'My sister ___ (make) a cake right now.',
          correct: 'is making', options: ['is making', 'makes', 'make', 'are making'] },
        { text: 'Be careful! You ___ (stand) on my foot now.',
          correct: 'are standing', options: ['are standing', 'stand', 'is standing', 'stands'] },
        { text: 'Look! The fish ___ (jump) out of the water now.',
          correct: 'is jumping', options: ['is jumping', 'jumps', 'jump', 'are jumping'] },
        { text: 'My friends and I ___ (watch) a cartoon right now.',
          correct: 'are watching', options: ['are watching', 'watch', 'is watching', 'watches'] },
        { text: 'Shh! The baby ___ (sleep) in his room now.',
          correct: 'is sleeping', options: ['is sleeping', 'sleeps', 'sleep', 'are sleeping'] },

        // --- Más present simple ---
        { text: 'My grandpa ___ (read) the newspaper every day.',
          correct: 'reads', options: ['reads', 'read', 'is reading', 'reading'] },
        { text: 'We always ___ (have) dinner at eight.',
          correct: 'have', options: ['have', 'has', 'are having', 'having'] },
        { text: 'She ___ (speak) three languages.',
          correct: 'speaks', options: ['speaks', 'speak', 'is speaking', 'speaking'] },
        { text: 'Dogs ___ (bark) at strangers.',
          correct: 'bark', options: ['bark', 'barks', 'are barking', 'barking'] },
        { text: 'The shop ___ (open) at nine every morning.',
          correct: 'opens', options: ['opens', 'open', 'is opening', 'opening'] },
        { text: 'I ___ (play) the guitar on Saturdays.',
          correct: 'play', options: ['play', 'plays', 'am playing', 'playing'] },
        { text: 'He usually ___ (catch) the early train.',
          correct: 'catches', options: ['catches', 'catch', 'is catching', 'catching'] },
        { text: 'My mum ___ (teach) maths at school.',
          correct: 'teaches', options: ['teaches', 'teach', 'is teaching', 'teaching'] },
        { text: 'Penguins ___ (live) in cold places.',
          correct: 'live', options: ['live', 'lives', 'are living', 'living'] },
        { text: 'We ___ (watch) a film every Friday.',
          correct: 'watch', options: ['watch', 'watches', 'are watching', 'watching'] },
        { text: 'She never ___ (drink) coffee at night.',
          correct: 'drinks', options: ['drinks', 'drink', 'is drinking', 'drinking'] },
        { text: 'The moon ___ (go) around the Earth.',
          correct: 'goes', options: ['goes', 'go', 'is going', 'going'] },
        { text: 'My friends ___ (meet) at the park after school.',
          correct: 'meet', options: ['meet', 'meets', 'are meeting', 'meeting'] },
        { text: 'He ___ (do) his homework every evening.',
          correct: 'does', options: ['does', 'do', 'is doing', 'doing'] },
        { text: 'Ice ___ (melt) in the sun.',
          correct: 'melts', options: ['melts', 'melt', 'is melting', 'melting'] },
        { text: 'I ___ (wash) my hands before lunch.',
          correct: 'wash', options: ['wash', 'washes', 'am washing', 'washing'] },
        { text: 'Bees ___ (make) honey.',
          correct: 'make', options: ['make', 'makes', 'are making', 'making'] },
        { text: 'My dad ___ (drive) to work every morning.',
          correct: 'drives', options: ['drives', 'drive', 'is driving', 'driving'] },
        { text: 'The library ___ (close) at six.',
          correct: 'closes', options: ['closes', 'close', 'is closing', 'closing'] },
        { text: 'We ___ (study) English on Mondays.',
          correct: 'study', options: ['study', 'studies', 'are studying', 'studying'] },
        { text: 'My cat always ___ (sleep) all day.',
          correct: 'sleeps', options: ['sleeps', 'sleep', 'is sleeping', 'sleeping'] },
        { text: 'They ___ (walk) to school every day.',
          correct: 'walk', options: ['walk', 'walks', 'are walking', 'walking'] },
        { text: 'The baby ___ (cry) every night.',
          correct: 'cries', options: ['cries', 'cry', 'is crying', 'crying'] },
        { text: 'Spiders ___ (have) eight legs.',
          correct: 'have', options: ['have', 'has', 'are having', 'having'] },

        // --- Más verbo "to be" y "have got" ---
        { text: 'My brother ___ (be) ten years old.',
          correct: 'is', options: ['is', 'are', 'am', 'be'] },
        { text: 'They ___ (be) my best friends.',
          correct: 'are', options: ['are', 'is', 'am', 'be'] },
        { text: 'I ___ (be) very happy today.',
          correct: 'am', options: ['am', 'is', 'are', 'be'] },
        { text: 'She ___ (have got) long brown hair.',
          correct: 'has got', options: ['has got', 'have got', 'is having', 'got'] },
        { text: 'We ___ (have got) a big garden.',
          correct: 'have got', options: ['have got', 'has got', 'are having', 'got'] },
        { text: 'You ___ (be) my favourite teacher.',
          correct: 'are', options: ['are', 'is', 'am', 'be'] },
        { text: 'My shoes ___ (be) under the bed.',
          correct: 'are', options: ['are', 'is', 'am', 'be'] },
        { text: 'My dog ___ (have got) a long tail.',
          correct: 'has got', options: ['has got', 'have got', 'is having', 'got'] },
    ];

    // === Preguntas para el juego de las Wh- questions ===
    // Cada pregunta tiene un hueco inicial (___) y una respuesta como pista.
    // El niño elige la palabra interrogativa correcta entre 4 opciones.
    const WH_WORDS = ['What', 'Where', 'Who', 'When', 'Why', 'How'];
    const WH_SENTENCES = [
        // --- What ---
        { text: '___ is he watching?', clue: 'A game show.', correct: 'What' },
        { text: '___ are they reading?', clue: 'A magazine.', correct: 'What' },
        { text: '___ is your favourite colour?', clue: 'Blue.', correct: 'What' },
        { text: '___ do you want for lunch?', clue: 'A sandwich.', correct: 'What' },
        { text: '___ is she cooking?', clue: 'Pasta.', correct: 'What' },
        { text: '___ are you doing?', clue: 'My homework.', correct: 'What' },
        { text: '___ is your name?', clue: 'My name is Lisa.', correct: 'What' },
        { text: '___ time is it?', clue: "It's three o'clock.", correct: 'What' },
        { text: '___ does the cat want?', clue: 'Some milk.', correct: 'What' },
        { text: '___ is in the box?', clue: 'A toy car.', correct: 'What' },
        { text: '___ are you eating?', clue: 'An apple.', correct: 'What' },

        // --- Where ---
        { text: '___ are they sitting?', clue: 'In the classroom.', correct: 'Where' },
        { text: '___ are we walking?', clue: 'To the shopping mall.', correct: 'Where' },
        { text: '___ do you live?', clue: 'In Madrid.', correct: 'Where' },
        { text: '___ is my bag?', clue: 'Under the table.', correct: 'Where' },
        { text: '___ are the children playing?', clue: 'In the park.', correct: 'Where' },
        { text: '___ does she work?', clue: 'In a hospital.', correct: 'Where' },
        { text: '___ is the dog?', clue: 'In the garden.', correct: 'Where' },
        { text: '___ are you going?', clue: 'To the beach.', correct: 'Where' },
        { text: '___ did you buy that hat?', clue: 'At the market.', correct: 'Where' },
        { text: '___ is the cat hiding?', clue: 'Behind the sofa.', correct: 'Where' },

        // --- Who ---
        { text: '___ is she talking to?', clue: 'Her sister.', correct: 'Who' },
        { text: '___ is he listening to?', clue: 'His friend.', correct: 'Who' },
        { text: '___ is your best friend?', clue: 'Anna is.', correct: 'Who' },
        { text: '___ made this cake?', clue: 'My mum did.', correct: 'Who' },
        { text: '___ is knocking at the door?', clue: 'The postman.', correct: 'Who' },
        { text: '___ are you waiting for?', clue: 'My brother.', correct: 'Who' },
        { text: '___ lives next door?', clue: 'An old man.', correct: 'Who' },
        { text: '___ is that boy?', clue: 'He is my cousin.', correct: 'Who' },
        { text: '___ won the game?', clue: 'Our team did.', correct: 'Who' },

        // --- When ---
        { text: '___ do you get up?', clue: "At seven o'clock.", correct: 'When' },
        { text: '___ is your birthday?', clue: 'In June.', correct: 'When' },
        { text: '___ do they have lunch?', clue: 'At noon.', correct: 'When' },
        { text: '___ does the film start?', clue: 'At eight.', correct: 'When' },
        { text: '___ do you do your homework?', clue: 'After school.', correct: 'When' },
        { text: '___ is the party?', clue: 'On Saturday.', correct: 'When' },
        { text: '___ does winter begin?', clue: 'In December.', correct: 'When' },
        { text: '___ do you brush your teeth?', clue: 'Before bed.', correct: 'When' },

        // --- Why ---
        { text: '___ is the baby crying?', clue: 'Because he is hungry.', correct: 'Why' },
        { text: '___ are you so happy?', clue: "Because it's my birthday.", correct: 'Why' },
        { text: '___ is she running?', clue: 'Because she is late.', correct: 'Why' },
        { text: '___ do you like summer?', clue: 'Because it is warm.', correct: 'Why' },
        { text: '___ are they laughing?', clue: 'Because the clown is funny.', correct: 'Why' },
        { text: '___ is he tired?', clue: 'Because he ran a lot.', correct: 'Why' },

        // --- How ---
        { text: '___ are you?', clue: "I'm fine, thanks.", correct: 'How' },
        { text: '___ old are you?', clue: "I'm ten years old.", correct: 'How' },
        { text: '___ do you go to school?', clue: 'By bus.', correct: 'How' },
        { text: '___ is the weather today?', clue: "It's sunny.", correct: 'How' },
        { text: '___ many apples are there?', clue: 'There are five.', correct: 'How' },
        { text: '___ does she feel?', clue: 'She feels happy.', correct: 'How' },
        { text: '___ do you spell your name?', clue: 'L-I-S-A.', correct: 'How' },
    ];

    // === Unit 1 "Our friends" (examen de inglés de 4º) ===
    // Todas las preguntas de estos juegos comparten formato:
    // { key, hint, text, clue, face, pron, keypadClass, options: [{label, value}], result, answer }.
    // "key" identifica el ítem para no repetir el anterior.

    function pickOne(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function noRepeat(make, prev) {
        let q;
        let tries = 0;
        do { q = make(); } while (prev && q.key === prev.key && ++tries < 50);
        return q;
    }

    function u1Options(correct, wrong) {
        return shuffle([correct, ...wrong].map((o) =>
            (typeof o === 'object' ? o : { label: o, value: o })));
    }

    function u1Question(fields, correct, wrong) {
        const c = typeof correct === 'object' ? correct : { label: correct, value: correct };
        return Object.assign(fields, {
            options: u1Options(c, wrong),
            result: c.value,
            answer: c.label,
        });
    }

    function u1Blank(str) {
        return escapeHtml(str).replace('___', '<span class="en-blank en-blank-active">_____</span>');
    }

    function u1Render(q, container) {
        let html = '';
        if (q.hint) html += `<div class="u1-hint">${escapeHtml(q.hint)}</div>`;
        if (q.face) html += faceSvgs(q.face, q.pron === 'They' ? 2 : 1);
        if (q.text) html += `<div class="en-sentence">${u1Blank(q.text)}</div>`;
        if (q.clue) html += `<div class="wq-clue">💬 ${u1Blank(q.clue)}</div>`;
        container.innerHTML = html;
    }

    const u1Keypad = (q) => q.options;
    const u1Answer = (q) => q.answer;

    // --- Hair and faces ---
    const HAIR_DIMS = ['length', 'type', 'colour'];   // orden natural de adjetivos
    const HAIR_VALUES = {
        length: ['short', 'long'],
        type: ['curly', 'straight'],
        colour: ['dark', 'fair'],
    };
    const otherHair = (dim, v) => HAIR_VALUES[dim].find((x) => x !== v);

    function u1Pron(Subj) {
        const s = Subj.toLowerCase();
        const sg = Subj !== 'They';
        const has = sg ? 'has' : 'have';
        const hasnt = sg ? "hasn't" : "haven't";
        const badHas = sg ? 'have' : 'has';
        const badHasnt = sg ? "haven't" : "hasn't";
        const be = sg ? 'is' : 'are';
        const bent = sg ? "isn't" : "aren't";
        const doo = sg ? 'does' : 'do';
        const dont = sg ? "doesn't" : "don't";
        return {
            Subj,
            subj: s,
            got: `${Subj}${sg ? "'s" : "'ve"} got`,
            not: `${Subj} ${hasnt} got`,
            aux: sg ? 'Has' : 'Have',
            wh: `What ${doo} ${s} look like?`,
            yes: `Yes, ${s} ${has}.`,
            no: `No, ${s} ${hasnt}.`,
            badGot: `${Subj} ${badHas} got`,
            badNot: `${Subj} ${badHasnt} got`,
            beNot: `${Subj} ${bent} got`,
            wrong: [
                `Yes, ${s} ${badHas}.`, `No, ${s} ${badHasnt}.`,
                `Yes, ${s} ${be}.`, `No, ${s} ${bent}.`,
                `Yes, ${s} ${doo}.`, `No, ${s} ${dont}.`,
            ],
        };
    }
    const U1_PRONS = ['He', 'She', 'They'].map(u1Pron);

    const HAIR_VOCAB = [
        ['pecas', 'freckles'],
        ['gafas', 'glasses'],
        ['pelo rizado', 'curly hair'],
        ['pelo liso', 'straight hair'],
        ['pelo rubio', 'fair hair'],
        ['pelo moreno / oscuro', 'dark hair'],
        ['pelo corto', 'short hair'],
        ['pelo largo', 'long hair'],
    ];

    function randomFace() {
        return {
            length: pickOne(HAIR_VALUES.length),
            type: pickOne(HAIR_VALUES.type),
            colour: pickOne(HAIR_VALUES.colour),
            glasses: Math.random() < 0.5,
            freckles: Math.random() < 0.5,
        };
    }

    function faceKey(f) {
        return [f.length, f.type, f.colour, f.glasses ? 'g' : '-', f.freckles ? 'f' : '-'].join('.');
    }

    function circlesSvg(points, r, attrs) {
        return points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" ${attrs}/>`).join('');
    }

    // Cara de dibujo animado: rizado = bultos redondos, liso = contorno suave,
    // largo = el pelo baja por debajo de las orejas hasta los hombros.
    function faceSvg(f) {
        const col = f.colour === 'fair' ? ['#f6c945', '#c9971a'] : ['#4b2e1a', '#26160a'];
        const hair = `fill="${col[0]}" stroke="${col[1]}" stroke-width="1.5"`;
        let back = '';
        let front = '';
        if (f.type === 'straight') {
            if (f.length === 'long') {
                back = `<path ${hair} d="M28,62 Q28,26 60,26 Q92,26 92,62 L97,117 Q87,121 78,115 L78,86 L42,86 L42,115 Q33,121 23,117 Z"/>`;
            }
            front = `<path ${hair} d="M27,72 Q25,26 60,26 Q95,26 93,72 Q89,52 75,47 Q60,55 45,47 Q31,52 27,72 Z"/>`;
        } else {
            if (f.length === 'long') {
                const pts = [];
                for (let y = 66; y <= 111; y += 9) pts.push([27, y], [93, y]);
                pts.push([35, 108], [85, 108], [36, 116], [84, 116]);
                back = circlesSvg(pts, 9, hair);
            }
            const ring = [];
            for (let a = 180; a >= 0; a -= 20) {
                const rad = (a * Math.PI) / 180;
                ring.push([+(60 + 32 * Math.cos(rad)).toFixed(1), +(64 - 32 * Math.sin(rad)).toFixed(1)]);
            }
            const fringe = [[40, 51], [50, 48], [60, 47], [70, 48], [80, 51]];
            front =
                `<path fill="${col[0]}" d="M28,66 Q27,30 60,30 Q93,30 92,66 Q86,50 60,48 Q34,50 28,66 Z"/>` +
                circlesSvg(ring, 8.5, hair) + circlesSvg(fringe, 7, hair);
        }
        const freckles = f.freckles
            ? circlesSvg([[41, 82], [45, 86], [38, 87], [79, 82], [75, 86], [82, 87]], 1.8, 'fill="#b5562b"')
            : '';
        const glasses = f.glasses
            ? '<g fill="rgba(255,255,255,0.35)" stroke="#1f2933" stroke-width="2.6">' +
              '<circle cx="49" cy="71" r="8.5"/><circle cx="71" cy="71" r="8.5"/>' +
              '<path d="M57.5,71 L62.5,71 M40.5,70 L31,67 M79.5,70 L89,67" fill="none"/></g>'
            : '';
        return `<svg class="u1-face" viewBox="0 0 120 125" role="img" aria-label="dibujo">` +
            `<path d="M28,125 Q30,106 60,106 Q90,106 92,125 Z" fill="#6dd5ed"/>` +
            `<rect x="52" y="94" width="16" height="16" fill="#f5c9a0"/>` +
            back +
            `<circle cx="30" cy="73" r="6" fill="#f5c9a0"/><circle cx="90" cy="73" r="6" fill="#f5c9a0"/>` +
            `<circle cx="60" cy="71" r="30" fill="#ffdcb8"/>` +
            freckles +
            `<circle cx="49" cy="71" r="3.2" fill="#2c2c2c"/><circle cx="71" cy="71" r="3.2" fill="#2c2c2c"/>` +
            `<path d="M58,78 Q60,81 62,78" fill="none" stroke="#c98a5e" stroke-width="2" stroke-linecap="round"/>` +
            `<path d="M51,88 Q60,95 69,88" fill="none" stroke="#b03a2e" stroke-width="2.6" stroke-linecap="round"/>` +
            glasses + front +
            `</svg>`;
    }

    function faceSvgs(f, count) {
        const one = faceSvg(f);
        return `<div class="u1-faces${count > 1 ? ' two' : ''}">${count > 1 ? one + one : one}</div>`;
    }

    function peloDescribe(face, p) {
        const kind = pickOne(['two', 'extras', 'mixed', 'contrast']);
        let correct;
        let all;
        let detail = '';
        if (kind === 'two') {
            const dims = shuffle(HAIR_DIMS.slice()).slice(0, 2)
                .sort((a, b) => HAIR_DIMS.indexOf(a) - HAIR_DIMS.indexOf(b));
            const say = (a, b) => `${p.got} ${a} ${b} hair.`;
            all = [];
            HAIR_VALUES[dims[0]].forEach((a) => HAIR_VALUES[dims[1]].forEach((b) => all.push(say(a, b))));
            correct = say(face[dims[0]], face[dims[1]]);
            detail = dims.join('+');
        } else if (kind === 'extras') {
            const say = (g, fr) => {
                if (g && fr) return `${p.got} glasses and freckles.`;
                if (g) return `${p.got} glasses. ${p.not} freckles.`;
                if (fr) return `${p.got} freckles. ${p.not} glasses.`;
                return `${p.not} glasses or freckles.`;
            };
            all = [say(true, true), say(true, false), say(false, true), say(false, false)];
            correct = say(face.glasses, face.freckles);
        } else if (kind === 'mixed') {
            const dim = pickOne(HAIR_DIMS);
            const acc = pickOne(['glasses', 'freckles']);
            const say = (v, has) => (has
                ? `${p.got} ${v} hair and ${acc}.`
                : `${p.got} ${v} hair. ${p.not} ${acc}.`);
            all = [];
            HAIR_VALUES[dim].forEach((v) => { all.push(say(v, true), say(v, false)); });
            correct = say(face[dim], face[acc]);
            detail = dim + '+' + acc;
        } else {
            const dim = pickOne(HAIR_DIMS);
            const v = face[dim];
            const o = otherHair(dim, v);
            correct = `${p.got} ${v} hair. ${p.not} ${o} hair.`;
            all = [
                correct,
                `${p.got} ${o} hair. ${p.not} ${v} hair.`,
                `${p.badGot} ${v} hair. ${p.badNot} ${o} hair.`,
                `${p.got} ${v} hair. ${p.beNot} ${o} hair.`,
            ];
            detail = dim;
        }
        return u1Question({
            key: `pelo-desc-${kind}-${detail}-${p.Subj}-${faceKey(face)}`,
            hint: 'Mira el dibujo 👀',
            face,
            pron: p.Subj,
            text: p.wh,
            keypadClass: 'u1-wide',
        }, correct, all.filter((s) => s !== correct));
    }

    function peloYesNo(face, p) {
        let feat;
        let truth;
        if (Math.random() < 0.4) {
            const acc = pickOne(['glasses', 'freckles']);
            feat = acc;
            truth = face[acc];
        } else {
            const dim = pickOne(HAIR_DIMS);
            const v = pickOne(HAIR_VALUES[dim]);
            feat = `${v} hair`;
            truth = face[dim] === v;
        }
        return u1Question({
            key: `pelo-yn-${feat}-${p.Subj}-${faceKey(face)}`,
            hint: 'Mira el dibujo y contesta 👀',
            face,
            pron: p.Subj,
            text: `${p.aux} ${p.subj} got ${feat}?`,
            keypadClass: 'u1',
        }, truth ? p.yes : p.no, [truth ? p.no : p.yes, ...shuffle(p.wrong.slice()).slice(0, 2)]);
    }

    function peloVocab() {
        const idx = Math.floor(Math.random() * HAIR_VOCAB.length);
        const toEnglish = Math.random() < 0.6;
        const col = toEnglish ? 1 : 0;
        const others = shuffle(HAIR_VOCAB.filter((_, i) => i !== idx)).slice(0, 3).map((w) => w[col]);
        return u1Question({
            key: `pelo-voc-${idx}-${toEnglish}`,
            hint: toEnglish ? '¿Cómo se dice en inglés?' : '¿Qué significa en castellano?',
            text: HAIR_VOCAB[idx][1 - col],
            keypadClass: 'u1',
        }, HAIR_VOCAB[idx][col], others);
    }

    // --- Has / Have got ---
    const HG_FORMS = {
        sg: { has: 'has', hasnt: "hasn't", c: "'s", Aux: 'Has', do: 'does', be: 'is', bent: "isn't", dont: "doesn't" },
        pl: { has: 'have', hasnt: "haven't", c: "'ve", Aux: 'Have', do: 'do', be: 'are', bent: "aren't", dont: "don't" },
        i: { has: 'have', hasnt: "haven't", c: "'ve", Aux: 'Have', do: 'do', be: 'am', bent: 'am not', dont: "don't" },
    };
    const HG_OPP = { sg: 'pl', pl: 'sg', i: 'sg' };
    const HG_PEOPLE_OBJ = ['freckles', 'glasses', 'dark hair', 'fair hair', 'short hair',
        'long hair', 'curly hair', 'straight hair'];
    const HG_PEOPLE_PAIRS = [['short hair', 'long hair'], ['curly hair', 'straight hair'],
        ['dark hair', 'fair hair']];
    const HG_ANIMAL_OBJ = ['a long tail', 'a short tail', 'big ears', 'small ears', 'long legs', 'short legs'];
    const HG_ANIMAL_PAIRS = [['a long tail', 'a short tail'], ['big ears', 'small ears'],
        ['long legs', 'short legs']];
    const HG_SUBJECTS = [
        { s: 'I', mid: 'I', n: 'i', pro: true, short: null },
        { s: 'You', mid: 'you', n: 'pl', pro: true, short: 'I', shortN: 'i' },
        { s: 'We', mid: 'we', n: 'pl', pro: true, short: null },
        { s: 'They', mid: 'they', n: 'pl', pro: true, short: 'they' },
        { s: 'He', mid: 'he', n: 'sg', pro: true, short: 'he' },
        { s: 'She', mid: 'she', n: 'sg', pro: true, short: 'she' },
        { s: 'It', mid: 'it', n: 'sg', pro: true, short: 'it', objs: HG_ANIMAL_OBJ, pairs: HG_ANIMAL_PAIRS },
        { s: 'Jane', mid: 'Jane', n: 'sg', short: 'she' },
        { s: 'Tom', mid: 'Tom', n: 'sg', short: 'he' },
        { s: 'My friend Anna', mid: 'my friend Anna', n: 'sg', short: 'she' },
        { s: 'My brother', mid: 'my brother', n: 'sg', short: 'he' },
        { s: 'Grandpa', mid: 'Grandpa', n: 'sg', short: 'he' },
        { s: 'My dog', mid: 'my dog', n: 'sg', short: 'it', objs: HG_ANIMAL_OBJ, pairs: HG_ANIMAL_PAIRS },
        { s: 'The elephant', mid: 'the elephant', n: 'sg', short: 'it',
          objs: ['big ears', 'a long trunk', 'four legs', 'a short tail'], pairs: [] },
        { s: 'The monkey', mid: 'the monkey', n: 'sg', short: 'it',
          objs: ['a long tail', 'long arms', 'small ears'], pairs: [] },
        { s: 'Tom and Ben', mid: 'Tom and Ben', n: 'pl', short: 'they' },
        { s: 'My cousins', mid: 'my cousins', n: 'pl', short: 'they' },
        { s: 'Jane and Lucy', mid: 'Jane and Lucy', n: 'pl', short: 'they' },
        { s: 'My friends', mid: 'my friends', n: 'pl', short: 'they' },
    ];
    const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    function haveGotQuestion() {
        const sub = pickOne(HG_SUBJECTS);
        const F = HG_FORMS[sub.n];
        const O = HG_FORMS[HG_OPP[sub.n]];
        const objs = sub.objs || HG_PEOPLE_OBJ;
        const pairs = sub.pairs || HG_PEOPLE_PAIRS;
        const kinds = ['full'];
        if (sub.n !== 'i') kinds.push('aux', 'aux');
        if (sub.pro) kinds.push('contr');
        if (pairs.length) kinds.push('neg', 'neg');
        if (sub.short) kinds.push('short', 'short', 'what');
        const kind = pickOne(kinds);
        const o = pickOne(objs);
        const base = { hint: 'Elige la palabra que falta ✏️', keypadClass: 'u1' };
        const key = (extra) => `hg-${kind}-${sub.s}-${extra}`;

        if (kind === 'full') {
            return u1Question(Object.assign(base, { key: key(o), text: `${sub.s} ___ got ${o}.` }),
                F.has, [O.has, F.be, O.be]);
        }
        if (kind === 'contr') {
            return u1Question(Object.assign(base, { key: key(o), text: `${sub.s}___ got ${o}.` }),
                F.c, ["'s", "'ve", "'re", "'m"].filter((x) => x !== F.c));
        }
        if (kind === 'neg') {
            const pair = shuffle(pickOne(pairs).slice());
            const first = sub.pro ? `${sub.s}${F.c} got ${pair[0]}.` : `${sub.s} ${F.has} got ${pair[0]}.`;
            const again = sub.pro ? sub.s : cap(sub.short);
            return u1Question(Object.assign(base, {
                key: key(pair.join('/')),
                text: `${first} ${again} ___ got ${pair[1]}.`,
            }), F.hasnt, [O.hasnt, F.bent, F.dont]);
        }
        if (kind === 'aux') {
            return u1Question(Object.assign(base, { key: key(o), text: `___ ${sub.mid} got ${o}?` }),
                F.Aux, [O.Aux, cap(F.be), cap(F.do)]);
        }
        const S = HG_FORMS[sub.shortN || sub.n];
        const SO = HG_FORMS[HG_OPP[sub.shortN || sub.n]];
        if (kind === 'short') {
            const yes = Math.random() < 0.5;
            return u1Question(Object.assign(base, {
                key: key(o + yes),
                text: `${F.Aux} ${sub.mid} got ${o}?`,
                clue: `${yes ? 'Yes' : 'No'}, ${sub.short} ___.`,
            }), yes ? S.has : S.hasnt, yes ? [SO.has, S.be, S.do] : [SO.hasnt, S.bent, S.dont]);
        }
        return u1Question(Object.assign(base, {
            key: key(o),
            text: `What ___ ${sub.mid} look like?`,
            clue: `${cap(sub.short)}${S.c} got ${o}.`,
        }), F.do, [O.do, F.be, F.has]);
    }

    // --- Me too / Me neither ---
    const METOO_STATEMENTS = (() => {
        const out = [];
        ['freckles', 'glasses', 'curly hair', 'straight hair', 'long hair', 'short hair', 'dark hair',
            'fair hair', 'a dog', 'a cat', 'a bike', 'a sister', 'a brother'].forEach((x) => {
            out.push([`I've got ${x}.`, true], [`I haven't got ${x}.`, false]);
        });
        ['tall', 'short', 'strong', 'brave', 'fast', 'funny', 'young', 'happy', 'hungry', 'tired']
            .forEach((x) => { out.push([`I'm ${x}.`, true], [`I'm not ${x}.`, false]); });
        ['swim', 'climb', 'run fast', 'ride a bike', 'sing', 'dance', 'skate', 'play football']
            .forEach((x) => { out.push([`I can ${x}.`, true], [`I can't ${x}.`, false]); });
        ['mangoes', 'bananas', 'ice cream', 'football', 'cats', 'dogs']
            .forEach((x) => { out.push([`I like ${x}.`, true], [`I don't like ${x}.`, false]); });
        return out;
    })();

    // --- Superlatives ---
    const SUPER_ADJ = [
        { a: 'tall', es: 'alto', esSup: 'el más alto', comp: 'taller', sup: 'the tallest',
          supBad: ['the taller', 'the most tall', 'the tallst', 'the talest'], compBad: ['more tall', 'taler', 'tallest'] },
        { a: 'short', es: 'bajo', esSup: 'el más bajo', comp: 'shorter', sup: 'the shortest',
          supBad: ['the shorter', 'the most short', 'the shortst', 'the shorttest'], compBad: ['more short', 'shortter', 'shortest'] },
        { a: 'brave', es: 'valiente', esSup: 'el más valiente', comp: 'braver', sup: 'the bravest',
          supBad: ['the braver', 'the most brave', 'the braveest', 'the bravst'], compBad: ['more brave', 'braveer', 'bravest'] },
        { a: 'strong', es: 'fuerte', esSup: 'el más fuerte', comp: 'stronger', sup: 'the strongest',
          supBad: ['the stronger', 'the most strong', 'the strongst', 'the stronggest'], compBad: ['more strong', 'strongger', 'strongest'] },
        { a: 'young', es: 'joven', esSup: 'el más joven', comp: 'younger', sup: 'the youngest',
          supBad: ['the younger', 'the most young', 'the youngst', 'the yungest'], compBad: ['more young', 'youngr', 'youngest'] },
        { a: 'old', es: 'viejo / mayor', esSup: 'el mayor (el más viejo)', comp: 'older', sup: 'the oldest',
          supBad: ['the older', 'the most old', 'the oldst', 'the olddest'], compBad: ['more old', 'oldder', 'oldest'] },
        { a: 'fast', es: 'rápido', esSup: 'el más rápido', comp: 'faster', sup: 'the fastest',
          supBad: ['the faster', 'the most fast', 'the fastst', 'the fasttest'], compBad: ['more fast', 'fastter', 'fastest'] },
        { a: 'funny', es: 'gracioso', esSup: 'el más gracioso', comp: 'funnier', sup: 'the funniest',
          supBad: ['the funnier', 'the most funny', 'the funnyest', 'the funyest'], compBad: ['more funny', 'funnyer', 'funniest'] },
        { a: 'big', es: 'grande', esSup: 'el más grande', comp: 'bigger', sup: 'the biggest',
          supBad: ['the bigger', 'the most big', 'the bigest', 'the biggst'], compBad: ['more big', 'biger', 'biggest'] },
        { a: 'small', es: 'pequeño', esSup: 'el más pequeño', comp: 'smaller', sup: 'the smallest',
          supBad: ['the smaller', 'the most small', 'the smalest', 'the smallst'], compBad: ['more small', 'smaler', 'smallest'] },
        { a: 'good', es: 'bueno', esSup: 'el mejor', comp: 'better', sup: 'the best',
          supBad: ['the better', 'the goodest', 'the most good', 'the bestest'], compBad: ['gooder', 'more good', 'best'] },
    ];
    const SUPER_NAMES = ['Ben', 'Jane', 'Tom', 'Lucy', 'Sam', 'Anna', 'Max', 'Emma'];
    const SUPER_PLACES = ['in the class', 'in my family', 'in the team'];
    const SUPER_GOOD = ['player in the team', 'singer in the class', 'swimmer in the class'];
    const SUPER_EXTRA = [
        ['The giraffe is ___ (tall) animal in the zoo.', 'tall'],
        ['The elephant is ___ (big) animal in the zoo.', 'big'],
        ['The elephant is ___ (strong) animal in the zoo.', 'strong'],
        ['The mouse is ___ (small) animal in the house.', 'small'],
        ['The clown is ___ (funny) person in the circus.', 'funny'],
        ['The lion is ___ (brave) animal in the jungle.', 'brave'],
        ['The cheetah is ___ (fast) animal on land.', 'fast'],
        ['Grandpa is ___ (old) person in my family.', 'old'],
        ['The baby is ___ (young) person in my family.', 'young'],
        ['My mum is ___ (good) cook in the world.', 'good'],
    ];
    const SUPER_SONG = [
        ["Who's tall? Who's short? We don't ___!", 'care', ['cry', 'swim', 'climb']],
        ["Who's brave? Who's fast? We're all ___!", 'different', ['the same', 'angry', 'the tallest']],
        ["We're all different! We're all ___!", 'friends', ['angry', 'monkeys', 'the same']],
    ];
    // Datos para "Who's the ...?": menor valor gana en "shortest", "youngest" y "fastest" (segundos).
    const SUPER_DATA = [
        { sup: 'tallest', unit: 'cm', min: 118, max: 150, highWins: true },
        { sup: 'shortest', unit: 'cm', min: 118, max: 150, highWins: false },
        { sup: 'oldest', unit: 'years old', min: 7, max: 12, highWins: true },
        { sup: 'youngest', unit: 'years old', min: 7, max: 12, highWins: false },
        { sup: 'fastest', unit: 'seconds', min: 9, max: 20, highWins: false, hint: 'Mira los datos 🔍 (menos segundos = más rápido)' },
    ];
    const findAdj = (a) => SUPER_ADJ.find((x) => x.a === a);

    function superQuestion() {
        const r = Math.random();
        const base = { keypadClass: 'u1' };
        if (r < 0.2) {
            const A = pickOne(SUPER_ADJ);
            return u1Question(Object.assign(base, {
                key: `sup-arrow-${A.a}`,
                hint: 'Superlativo: el / la más…',
                text: `${A.a} ➜ ___`,
            }), A.sup, shuffle(A.supBad.slice()).slice(0, 3));
        }
        if (r < 0.45) {
            let text;
            let A;
            if (Math.random() < 0.3) {
                const e = pickOne(SUPER_EXTRA);
                text = e[0];
                A = findAdj(e[1]);
            } else {
                A = pickOne(SUPER_ADJ);
                const name = pickOne(SUPER_NAMES);
                text = A.a === 'good'
                    ? `${name} is ___ (good) ${pickOne(SUPER_GOOD)}.`
                    : `${name} is ___ (${A.a}) ${pickOne(SUPER_PLACES)}.`;
            }
            return u1Question(Object.assign(base, {
                key: `sup-sent-${text}`,
                hint: 'Completa con el superlativo',
                text,
            }), A.sup, shuffle(A.supBad.slice()).slice(0, 3));
        }
        if (r < 0.6) {
            const A = pickOne(SUPER_ADJ);
            if (Math.random() < 0.6) {
                return u1Question(Object.assign(base, {
                    key: `sup-row3-${A.a}`, hint: 'Completa la serie', text: `${A.a} – ${A.comp} – ___`,
                }), A.sup, shuffle(A.supBad.slice()).slice(0, 3));
            }
            return u1Question(Object.assign(base, {
                key: `sup-row2-${A.a}`, hint: 'Completa la serie', text: `${A.a} – ___ – ${A.sup}`,
            }), A.comp, A.compBad);
        }
        if (r < 0.8) {
            const A = pickOne(SUPER_ADJ);
            const others = shuffle(SUPER_ADJ.filter((x) => x !== A)).slice(0, 3);
            const mode = pickOne(['es-en', 'es-en', 'en-es', 'sup']);
            if (mode === 'es-en') {
                return u1Question(Object.assign(base, {
                    key: `sup-tr-es-${A.a}`, hint: '¿Cómo se dice en inglés?', text: A.es,
                }), A.a, others.map((x) => x.a));
            }
            if (mode === 'en-es') {
                return u1Question(Object.assign(base, {
                    key: `sup-tr-en-${A.a}`, hint: '¿Qué significa en castellano?', text: A.a,
                }), A.es, others.map((x) => x.es));
            }
            return u1Question(Object.assign(base, {
                key: `sup-tr-sup-${A.a}`, hint: '¿Cómo se dice en inglés?', text: A.esSup,
            }), A.sup, others.map((x) => x.sup));
        }
        if (r < 0.95) {
            const D = pickOne(SUPER_DATA);
            const names = shuffle(SUPER_NAMES.slice()).slice(0, 3);
            const vals = [];
            while (vals.length < 3) {
                const v = D.min + Math.floor(Math.random() * (D.max - D.min + 1));
                if (!vals.includes(v)) vals.push(v);
            }
            const target = D.highWins ? Math.max(...vals) : Math.min(...vals);
            const winner = names[vals.indexOf(target)];
            return u1Question(Object.assign(base, {
                key: `sup-data-${D.sup}-${names.join()}-${vals.join()}`,
                hint: D.hint || 'Mira los datos 🔍',
                text: `Who's the ${D.sup}?`,
                clue: names.map((n, i) => `${n}: ${vals[i]} ${D.unit}`).join(' · '),
            }), winner, names.filter((n) => n !== winner));
        }
        const s = pickOne(SUPER_SONG);
        return u1Question(Object.assign(base, {
            key: `sup-song-${s[1]}`, hint: '🎵 Completa la canción', text: s[0],
        }), s[1], s[2]);
    }

    // --- Story: Monkey and Elephant ---
    const STORY_WHO = {
        Monkey: { label: '🐒 Monkey', value: 'Monkey' },
        Elephant: { label: '🐘 Elephant', value: 'Elephant' },
        Owl: { label: '🦉 Owl', value: 'Owl' },
        Both: { label: '🐒🐘 Monkey and Elephant', value: 'Both' },
    };
    const STORY_WHO_ITEMS = [
        ['___ is fast.', 'Monkey'],
        ['___ is strong.', 'Elephant'],
        ['___ can climb.', 'Monkey'],
        ["___ can't climb.", 'Elephant'],
        ['___ can swim.', 'Elephant'],
        ["___ can't swim.", 'Monkey'],
        ['___ has got an idea.', 'Owl'],
        ['___ says: "Stop!"', 'Owl'],
        ['___ climbs and helps Elephant.', 'Monkey'],
        ['___ swims and helps Monkey.', 'Elephant'],
        ['___ says: "You\'re different, but you\'re a team!"', 'Owl'],
        ['___ want the mango.', 'Both'],
        ['___ are angry at first.', 'Both'],
        ['___ learn a lesson.', 'Both'],
        ['___ are a good team.', 'Both'],
    ];
    const STORY_TF = [
        ['Monkey is fast.', true],
        ['Elephant is strong.', true],
        ['Monkey can climb.', true],
        ['Monkey can swim.', false],
        ["Monkey can't swim.", true],
        ["Monkey can't climb.", false],
        ['Elephant can swim.', true],
        ['Elephant can climb.', false],
        ["Elephant can't climb.", true],
        ["Elephant can't swim.", false],
        ['Owl has got an idea.', true],
        ['Monkey has got an idea.', false],
        ['They want the mango.', true],
        ['They want a banana.', false],
        ['Monkey and Elephant are angry at first.', true],
        ['Monkey and Elephant are angry at the end.', false],
        ['Monkey and Elephant are a good team.', true],
        ['Monkey and Elephant get the mango.', true],
        ["Monkey and Elephant don't get the mango.", false],
        ['Monkey helps Elephant.', true],
        ['Elephant helps Monkey.', true],
        ['Owl climbs and helps Elephant.', false],
        ['Monkey and Elephant are the same.', false],
        ['Monkey and Elephant are different.', true],
        ['Monkey and Elephant learn a lesson.', true],
    ];
    const STORY_SEQ = [
        'Two friends are angry.',
        'Monkey and Elephant go and get the mango.',
        'Elephant swims and helps Monkey.',
        'Monkey climbs and helps Elephant.',
        'Monkey and Elephant learn a lesson.',
    ];
    const STORY_THINK = [
        ['Why are Monkey and Elephant a good team?', 'Because they help each other.',
            ['Because they are the same.', 'Because they are angry.', "Because they can't swim."]],
        ['What does Owl say?', "You're different, but you're a team!",
            ["You're the same, so you're a team!", "You're angry. Go away!", "You can't get the mango!"]],
        ['What do Monkey and Elephant want?', '🥭 The mango.',
            ['🍌 A banana.', '🍎 An apple.', '🍓 A strawberry.']],
        ['Why does Monkey need Elephant?', "Because Monkey can't swim.",
            ["Because Monkey can't climb.", 'Because Monkey is angry.', 'Because Monkey is strong.']],
        ['Why does Elephant need Monkey?', "Because Elephant can't climb.",
            ["Because Elephant can't swim.", 'Because Elephant is fast.', 'Because Elephant is small.']],
        ['What do Monkey and Elephant say at the end?', "Yes! We're a good team!",
            ["We're the same!", 'Go away!', "We can't get the mango!"]],
    ];

    function storyQuestion() {
        const r = Math.random();
        if (r < 0.3) {
            const [text, who] = pickOne(STORY_WHO_ITEMS);
            return u1Question({
                key: `story-who-${text}`, hint: '¿Quién es? 🤔', text, keypadClass: 'u1',
            }, STORY_WHO[who], Object.keys(STORY_WHO).filter((k) => k !== who).map((k) => STORY_WHO[k]));
        }
        if (r < 0.65) {
            const [text, truth] = pickOne(STORY_TF);
            const T = { label: '✅ True', value: 'true' };
            const F = { label: '❌ False', value: 'false' };
            return u1Question({
                key: `story-tf-${text}`, hint: '¿Verdadero (True) o falso (False)?', text, keypadClass: 'u1-two',
            }, truth ? T : F, [truth ? F : T]);
        }
        if (r < 0.85) {
            const mode = pickOne(['next', 'next', 'before', 'first', 'last']);
            let i;
            let answer;
            let text;
            let clue = '';
            if (mode === 'next') {
                i = Math.floor(Math.random() * 4);
                answer = STORY_SEQ[i + 1];
                text = 'What happens next?';
                clue = STORY_SEQ[i];
            } else if (mode === 'before') {
                i = 1 + Math.floor(Math.random() * 4);
                answer = STORY_SEQ[i - 1];
                text = 'What happens before?';
                clue = STORY_SEQ[i];
            } else {
                i = mode === 'first' ? 0 : 4;
                answer = STORY_SEQ[i];
                text = mode === 'first' ? 'What happens first?' : 'What happens at the end?';
            }
            const wrong = shuffle(STORY_SEQ.filter((s) => s !== answer && s !== clue)).slice(0, 3);
            return u1Question({
                key: `story-seq-${mode}-${i}`, hint: '📖 El orden de la historia', text, clue, keypadClass: 'u1-wide',
            }, answer, wrong);
        }
        const [text, answer, wrong] = pickOne(STORY_THINK);
        return u1Question({
            key: `story-think-${text}`, hint: '🤔 Piensa en la historia', text, keypadClass: 'u1-wide',
        }, answer, wrong);
    }

    const U1_MIX_GAMES = ['u1pelo', 'u1havegot', 'u1metoo', 'u1super', 'u1story'];

    // === Catálogo de juegos ===
    const GAMES = {
        sumas: {
            id: 'sumas',
            title: 'Sumas Rápidas',
            total: 60,
            timeLimit: 120,
            keypadClass: 'cols-4',
            generate(prev) {
                let a, b, result;
                do {
                    result = 1 + Math.floor(Math.random() * 10);
                    const aMin = Math.max(0, result - 9);
                    const aMax = Math.min(9, result);
                    a = aMin + Math.floor(Math.random() * (aMax - aMin + 1));
                    b = result - a;
                } while (prev && prev.a === a && prev.b === b);
                return { a, b, result };
            },
            renderQuestion(q, container) {
                container.innerHTML =
                    `<div class="math-row">` +
                    `<span class="num">${q.a}</span>` +
                    `<span class="op">+</span>` +
                    `<span class="num">${q.b}</span>` +
                    `<span class="op">=</span>` +
                    `<span class="num answer-slot">?</span>` +
                    `</div>`;
            },
            getKeypadValues() { return range(0, 10); },
            formatAnswer(q) { return String(q.result); },
        },

        multi: {
            id: 'multi',
            title: 'Multiplicaciones Rápidas',
            total: 40,
            timeLimit: 120,
            keypadClass: 'options',
            generate(prev) {
                let a, b, result;
                do {
                    a = 1 + Math.floor(Math.random() * 9);
                    b = 1 + Math.floor(Math.random() * 9);
                    result = a * b;
                } while (prev && prev.a === a && prev.b === b);
                return { a, b, result };
            },
            renderQuestion(q, container) {
                container.innerHTML =
                    `<div class="math-row">` +
                    `<span class="num">${q.a}</span>` +
                    `<span class="op">×</span>` +
                    `<span class="num">${q.b}</span>` +
                    `<span class="op">=</span>` +
                    `<span class="num answer-slot">?</span>` +
                    `</div>`;
            },
            // 4 opciones: la correcta + 3 distractores plausibles.
            getKeypadValues(q) {
                const correct = q.result;
                const candidates = new Set();
                for (let da = -2; da <= 2; da++) {
                    for (let db = -2; db <= 2; db++) {
                        if (da === 0 && db === 0) continue;
                        const a = q.a + da, b = q.b + db;
                        if (a >= 1 && a <= 9 && b >= 1 && b <= 9) {
                            const r = a * b;
                            if (r !== correct) candidates.add(r);
                        }
                    }
                }
                const distractors = shuffle(Array.from(candidates)).slice(0, 3);
                return shuffle([correct, ...distractors]);
            },
            formatAnswer(q) { return String(q.result); },
        },

        lengua: {
            id: 'lengua',
            title: '¿Mayúscula o minúscula?',
            total: 30,
            timeLimit: 120,
            keypadClass: 'binary',
            generate(prev) {
                let pick;
                do {
                    pick = LANG_WORDS[Math.floor(Math.random() * LANG_WORDS.length)];
                } while (prev && prev.word === pick.word);
                const lower = pick.word;
                const upper = lower.charAt(0).toUpperCase() + lower.slice(1);
                return {
                    word: lower,
                    upper,
                    lower,
                    result: pick.upper ? 'upper' : 'lower',
                };
            },
            renderQuestion(q, container) {
                container.innerHTML = `<div class="word-prompt">¿Cuál está bien escrita?</div>`;
            },
            // Mostramos ambas variantes (con y sin mayúscula inicial), barajadas.
            getKeypadValues(q) {
                return shuffle([
                    { label: q.upper, value: 'upper' },
                    { label: q.lower, value: 'lower' },
                ]);
            },
            formatAnswer(q) {
                return q.result === 'upper' ? q.upper : q.lower;
            },
        },

        english: {
            id: 'english',
            title: 'Fill the sentence',
            total: 25,
            timeLimit: 150,
            keypadClass: 'words',
            generate(prev) {
                let pick;
                do {
                    pick = ENGLISH_SENTENCES[Math.floor(Math.random() * ENGLISH_SENTENCES.length)];
                } while (prev && prev.text === pick.text);
                return {
                    text: pick.text,
                    pool: shuffle(pick.pool.slice()),
                    result: pick.correct.slice(),  // array → modo multi-pick
                };
            },
            renderQuestion(q, container, picks) {
                picks = picks || [];
                let i = 0;
                const html = q.text.replace(/___/g, () => {
                    const idx = i++;
                    const p = picks[idx];
                    if (p === undefined) {
                        const cls = idx === picks.length ? 'en-blank en-blank-active' : 'en-blank';
                        return `<span class="${cls}">_____</span>`;
                    }
                    return `<span class="en-blank en-blank-filled">${escapeHtml(p)}</span>`;
                });
                container.innerHTML = `<div class="en-sentence">${html}</div>`;
            },
            getKeypadValues(q) {
                return q.pool.map((w) => ({ label: w, value: w }));
            },
            formatAnswer(q) {
                let i = 0;
                return q.text.replace(/___/g, () => q.result[i++]);
            },
        },

        verbos: {
            id: 'verbos',
            title: 'Present Simple o Continuous',
            total: 25,
            timeLimit: 150,
            keypadClass: 'verbs',
            generate(prev) {
                let pick;
                do {
                    pick = VERB_SENTENCES[Math.floor(Math.random() * VERB_SENTENCES.length)];
                } while (prev && prev.text === pick.text);
                return {
                    text: pick.text,
                    options: shuffle(pick.options.slice()),
                    result: pick.correct,
                };
            },
            renderQuestion(q, container) {
                // El hueco "___" se resalta; el verbo entre paréntesis queda como pista.
                const html = escapeHtml(q.text)
                    .replace('___', '<span class="en-blank en-blank-active">_____</span>');
                container.innerHTML = `<div class="en-sentence">${html}</div>`;
            },
            getKeypadValues(q) {
                return q.options.map((w) => ({ label: w, value: w }));
            },
            formatAnswer(q) { return q.result; },
        },

        preguntas: {
            id: 'preguntas',
            title: 'Las preguntas Wh-',
            total: 25,
            timeLimit: 150,
            keypadClass: 'wh',
            generate(prev) {
                let pick;
                do {
                    pick = WH_SENTENCES[Math.floor(Math.random() * WH_SENTENCES.length)];
                } while (prev && prev.text === pick.text);
                // 4 opciones: la correcta + 3 distractores del resto de Wh-.
                const others = shuffle(WH_WORDS.filter((w) => w !== pick.correct)).slice(0, 3);
                return {
                    text: pick.text,
                    clue: pick.clue,
                    options: shuffle([pick.correct, ...others]),
                    result: pick.correct,
                };
            },
            renderQuestion(q, container) {
                const html = escapeHtml(q.text)
                    .replace('___', '<span class="en-blank en-blank-active">_____</span>');
                container.innerHTML =
                    `<div class="en-sentence">${html}</div>` +
                    `<div class="wq-clue">💬 ${escapeHtml(q.clue)}</div>`;
            },
            getKeypadValues(q) {
                return q.options.map((w) => ({ label: w, value: w }));
            },
            formatAnswer(q) { return q.result; },
        },

        u1pelo: {
            id: 'u1pelo',
            title: 'Hair and faces',
            total: 25,
            timeLimit: 150,
            keypadClass: 'u1',
            generate(prev) {
                return noRepeat(() => {
                    const r = Math.random();
                    if (r < 0.2) return peloVocab();
                    const face = randomFace();
                    const p = pickOne(U1_PRONS);
                    return r < 0.6 ? peloDescribe(face, p) : peloYesNo(face, p);
                }, prev);
            },
            renderQuestion: u1Render,
            getKeypadValues: u1Keypad,
            formatAnswer: u1Answer,
        },

        u1havegot: {
            id: 'u1havegot',
            title: 'Has / Have got',
            total: 25,
            timeLimit: 150,
            keypadClass: 'u1',
            generate(prev) { return noRepeat(haveGotQuestion, prev); },
            renderQuestion: u1Render,
            getKeypadValues: u1Keypad,
            formatAnswer: u1Answer,
        },

        u1metoo: {
            id: 'u1metoo',
            title: 'Me too / Me neither',
            total: 30,
            timeLimit: 150,
            keypadClass: 'u1-two',
            generate(prev) {
                return noRepeat(() => {
                    const [text, positive] = pickOne(METOO_STATEMENTS);
                    return u1Question({
                        key: `metoo-${text}`,
                        hint: 'Responde que a ti también te pasa 👍',
                        text,
                        keypadClass: 'u1-two',
                    }, positive ? 'Me too!' : 'Me neither!', [positive ? 'Me neither!' : 'Me too!']);
                }, prev);
            },
            renderQuestion: u1Render,
            getKeypadValues: u1Keypad,
            formatAnswer: u1Answer,
        },

        u1super: {
            id: 'u1super',
            title: 'The tallest!',
            total: 25,
            timeLimit: 150,
            keypadClass: 'u1',
            generate(prev) { return noRepeat(superQuestion, prev); },
            renderQuestion: u1Render,
            getKeypadValues: u1Keypad,
            formatAnswer: u1Answer,
        },

        u1story: {
            id: 'u1story',
            title: 'Monkey & Elephant',
            total: 20,
            timeLimit: 150,
            keypadClass: 'u1',
            generate(prev) { return noRepeat(storyQuestion, prev); },
            renderQuestion: u1Render,
            getKeypadValues: u1Keypad,
            formatAnswer: u1Answer,
        },

        // Repaso: cada pregunta recuerda en "sub" qué juego la generó y se delega en él.
        u1mix: {
            id: 'u1mix',
            title: 'Repaso Unit 1',
            total: 30,
            timeLimit: 180,
            keypadClass: 'u1',
            generate(prev) {
                const sub = pickOne(U1_MIX_GAMES);
                const game = GAMES[sub];
                const q = game.generate(prev && prev.sub === sub ? prev : null);
                q.sub = sub;
                if (!q.keypadClass) q.keypadClass = game.keypadClass;
                return q;
            },
            renderQuestion(q, container, picks) { GAMES[q.sub].renderQuestion(q, container, picks); },
            getKeypadValues(q) { return GAMES[q.sub].getKeypadValues(q); },
            formatAnswer(q) { return GAMES[q.sub].formatAnswer(q); },
        },
    };

    function range(from, to) {
        const out = [];
        for (let i = from; i <= to; i++) out.push(i);
        return out;
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // === Estado ===
    const state = {
        playerName: '',
        game: null,
        currentIndex: 0,
        correct: 0,
        timeLeft: 0,
        timerId: null,
        currentQuestion: null,
        currentPicks: [],   // para juegos con respuesta de varios picks
        finished: false,
        locked: false,      // bloquea entrada mientras se muestra feedback
    };

    const $ = (id) => document.getElementById(id);
    const screens = {
        welcome: $('screen-welcome'),
        game: $('screen-game'),
        result: $('screen-result'),
    };

    function showScreen(name) {
        Object.values(screens).forEach((s) => s.classList.remove('active'));
        screens[name].classList.add('active');
    }

    // === Construcción del teclado según el juego y la pregunta ===
    function buildKeypad(game, question) {
        const keypad = $('keypad');
        keypad.innerHTML = '';
        keypad.className = 'keypad ' + ((question && question.keypadClass) || game.keypadClass || '');
        const values = game.getKeypadValues(question);
        values.forEach((v) => {
            const btn = document.createElement('button');
            btn.className = 'key';
            btn.type = 'button';
            if (typeof v === 'object') {
                btn.innerHTML =
                    `<span class="key-label">${escapeHtml(v.label)}</span>` +
                    (v.sub ? `<span class="key-sub">${escapeHtml(v.sub)}</span>` : '');
                btn.addEventListener('click', () => onAnswer(v.value));
            } else {
                btn.textContent = v;
                btn.addEventListener('click', () => onAnswer(v));
            }
            keypad.appendChild(btn);
        });
    }

    // === Inicio del juego ===
    function startGame(gameId) {
        const name = $('player-name').value.trim();
        if (!name) {
            $('player-name').focus();
            $('player-name').style.borderColor = 'var(--danger)';
            setTimeout(() => { $('player-name').style.borderColor = ''; }, 1200);
            return;
        }
        state.playerName = name;
        state.game = GAMES[gameId];
        state.currentIndex = 0;
        state.correct = 0;
        state.timeLeft = state.game.timeLimit;
        state.finished = false;
        state.locked = false;
        state.currentQuestion = null;

        $('hud-name').textContent = state.playerName;
        updateHUD();
        nextQuestion();
        startTimer();
        showScreen('game');
    }

    function startTimer() {
        clearInterval(state.timerId);
        renderTimer();
        state.timerId = setInterval(() => {
            state.timeLeft--;
            renderTimer();
            if (state.timeLeft <= 0) endGame(false);
        }, 1000);
    }

    function renderTimer() {
        const m = Math.floor(state.timeLeft / 60);
        const s = state.timeLeft % 60;
        const el = $('hud-timer');
        el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        el.classList.toggle('warning', state.timeLeft <= 30 && state.timeLeft > 10);
        el.classList.toggle('danger', state.timeLeft <= 10);
    }

    function nextQuestion() {
        if (state.currentIndex >= state.game.total) {
            endGame(true);
            return;
        }
        state.currentQuestion = state.game.generate(state.currentQuestion);
        state.currentPicks = [];
        state.game.renderQuestion(state.currentQuestion, $('question'), state.currentPicks);
        buildKeypad(state.game, state.currentQuestion);
        state.locked = false;
    }

    // Respuesta del jugador. Para juegos con respuesta única (sumas, multi,
    // lengua) se comprueba al instante. Para juegos con varios picks (inglés,
    // result es un array), se acumulan los picks y se comprueba cuando se
    // han elegido todos. Si falla, muestra la respuesta correcta y avanza.
    function onAnswer(value) {
        if (state.finished || state.locked || !state.currentQuestion) return;
        const target = state.currentQuestion.result;
        const isMulti = Array.isArray(target);

        if (isMulti) {
            state.currentPicks.push(value);
            state.game.renderQuestion(state.currentQuestion, $('question'), state.currentPicks);
            if (state.currentPicks.length < target.length) return;
            const allOk = state.currentPicks.every((p, i) => p === target[i]);
            finishCheck(allOk);
            return;
        }

        const ok = value === target || String(value) === String(target);
        finishCheck(ok);
    }

    function finishCheck(correct) {
        state.locked = true;
        const fb = $('feedback');
        if (correct) {
            state.correct++;
            fb.textContent = '¡Correcto! ✅';
            fb.className = 'feedback show correct';
            updateHUD();
            setTimeout(() => {
                fb.className = 'feedback';
                state.currentIndex++;
                nextQuestion();
            }, 400);
        } else {
            fb.textContent = `❌ Era ${state.game.formatAnswer(state.currentQuestion)}`;
            fb.className = 'feedback show wrong';
            setTimeout(() => {
                fb.className = 'feedback';
                state.currentIndex++;
                nextQuestion();
            }, 500);
        }
    }

    function updateHUD() {
        $('hud-score').textContent = `${state.correct} / ${state.game.total}`;
        const pct = (state.correct / state.game.total) * 100;
        $('progress-fill').style.width = pct + '%';
    }

    function endGame(completed) {
        state.finished = true;
        clearInterval(state.timerId);
        const elapsed = state.game.timeLimit - state.timeLeft;
        const accuracy = state.currentIndex > 0
            ? Math.round((state.correct / state.currentIndex) * 100)
            : 0;

        $('stat-correct').textContent = `${state.correct} / ${state.game.total}`;
        $('stat-time').textContent = `${elapsed}s`;
        $('stat-accuracy').textContent = `${accuracy}%`;

        const allCorrect = completed && state.correct === state.game.total;
        const safeName = escapeHtml(state.playerName);

        if (allCorrect) {
            $('result-title').textContent = '🎉 ¡Felicidades!';
            $('result-message').innerHTML =
                `¡Lo lograste, <strong>${safeName}</strong>! ` +
                `Acertaste las ${state.game.total} en <strong>${elapsed} segundos</strong>. ` +
                `¡Eres una estrella! ⭐`;
            launchConfetti();
        } else {
            $('result-title').textContent = '💪 ¡Buen intento!';
            const reason = state.timeLeft <= 0
                ? 'Se acabó el tiempo'
                : 'Has terminado';
            $('result-message').innerHTML =
                `${reason}, <strong>${safeName}</strong>. ` +
                `Conseguiste <strong>${state.correct}</strong> aciertos. ` +
                `¡Inténtalo otra vez, seguro que mejoras! 🚀`;
        }

        showScreen('result');
    }

    // === Confeti ===
    function launchConfetti() {
        const canvas = $('confetti');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const colors = ['#ffcc00', '#ff9500', '#2ecc71', '#6dd5ed', '#e74c3c', '#9b59b6'];
        const particles = Array.from({ length: 140 }, () => ({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height,
            r: 4 + Math.random() * 6,
            c: colors[Math.floor(Math.random() * colors.length)],
            vy: 2 + Math.random() * 4,
            vx: -2 + Math.random() * 4,
            rot: Math.random() * Math.PI,
            vr: -0.2 + Math.random() * 0.4,
        }));
        let frame = 0;
        const max = 240;
        function tick() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.vr;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.c;
                ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
                ctx.restore();
            });
            frame++;
            if (frame < max) requestAnimationFrame(tick);
            else ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        tick();
    }

    // === Eventos ===
    function bindEvents() {
        document.querySelectorAll('.game-card').forEach((card) => {
            card.addEventListener('click', () => startGame(card.dataset.game));
        });

        $('player-name').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.querySelector('.game-card').focus();
            }
        });

        $('btn-retry').addEventListener('click', () => {
            if (state.game) startGame(state.game.id);
        });
        $('btn-menu').addEventListener('click', () => {
            clearInterval(state.timerId);
            state.finished = true;
            showScreen('welcome');
            $('player-name').value = state.playerName;
        });
        $('btn-back').addEventListener('click', () => {
            clearInterval(state.timerId);
            state.finished = true;
            showScreen('welcome');
            $('player-name').value = state.playerName;
        });
        $('btn-home').addEventListener('click', () => {
            clearInterval(state.timerId);
            state.finished = true;
            $('player-name').value = '';
            showScreen('welcome');
            $('player-name').focus();
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        bindEvents();
        $('player-name').focus();
    });
})();
