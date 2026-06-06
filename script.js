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
        keypad.className = 'keypad ' + (game.keypadClass || '');
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
