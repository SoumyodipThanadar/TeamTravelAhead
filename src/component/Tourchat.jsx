import React, { useState } from "react";
import './css/Tourchat.css';

const Tourchat = () => {
    const [destination, setDestination] = useState("");
    const [response, setResponse] = useState("");

    const handleDestination = () => {
        let reply = "";

        switch (destination.toLowerCase()) {
            case "haridwar":
    reply = `<p style="font-size: 17px;">The best months to visit Haridwar are <strong>October to April</strong>. 
    Best activities include attending the Ganga Aarti, visiting temples like Har Ki Pauri, and exploring Rajaji National Park. 
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Chandi Devi Temple</strong>: A sacred temple on a hilltop.</li>
        <li><strong>Mansa Devi Temple</strong>: Another important temple with panoramic views.</li>
        <li><strong>Har Ki Pauri</strong>: The main ghat on the Ganges River.</li>
        <li><strong>Rajaji National Park</strong>: A wildlife sanctuary with diverse flora and fauna.</li>
        <li><strong>Ganga Aarti</strong>: A grand evening ritual on the ghats.</li>
    </ul>`;
    break;
    case "sundarbans":
    reply = `<p style="font-size: 17px;">The best time to visit Sundarbans is from <strong>November to February</strong>. Activities include wildlife safaris, river cruises, and exploring the mangroves. Major sightseeing spots include:</p>
    <ul>
        <li><strong>Sundarbans National Park</strong>: A UNESCO World Heritage Site known for its Royal Bengal tigers.</li>
        <li><strong>Sundarbans Biosphere Reserve</strong>: A large protected area with diverse wildlife.</li>
        <li><strong>Sajnekhali Watch Tower</strong>: Provides views of the surrounding mangroves and wildlife.</li>
        <li><strong>Netidhopani Temple</strong>: An ancient temple in the Sundarbans region.</li>
        <li><strong>Dobanki Watch Tower</strong>: Offers a panoramic view of the Sundarbans.</li>
    </ul>`;
    break;

case "sikkim":
    reply = `<p style="font-size: 17px;">The best time to visit Sikkim is <strong>March to June</strong> or <strong>October to mid-December</strong>.
    Activities include trekking, sightseeing at Yumthang Valley, and visiting monasteries like Rumtek.
    Major sightseeing locations include:</p>
    <ul>
        <li><strong>Nathula Pass</strong>: A high mountain pass with stunning views.</li>
        <li><strong>Tsomgo Lake</strong>: A picturesque glacial lake.</li>
        <li><strong>Pelling</strong>: A town with beautiful views of the Kanchenjunga range.</li>
        <li><strong>Rumtek Monastery</strong>: A prominent Tibetan Buddhist monastery.</li>
        <li><strong>Yumthang Valley</strong>: Known for its vibrant rhododendron blooms.</li>
    </ul>`;
    break;
case "digha":
    reply = `<p style="font-size: 17px;">The best time to visit Digha is <strong>October to February</strong>.
    Best activities include beach walks, visiting Marine Aquarium, and sightseeing at Shankarpur Beach.
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Digha Beach</strong>: A popular sandy beach for relaxation.</li>
        <li><strong>Marine Aquarium</strong>: Showcasing local marine life.</li>
        <li><strong>Shankarpur Beach</strong>: A quieter beach nearby.</li>
        <li><strong>Junput Beach</strong>: Another scenic beach for picnics and relaxation.</li>
        <li><strong>Mandarmani Beach</strong>: Known for its calm and less crowded atmosphere.</li>
    </ul>`;
    break;
case "puri":
    reply = `<p style="font-size: 17px;">The best time to visit Puri is <strong>October to February</strong>.
    Activities include visiting Jagannath Temple, enjoying the beaches, and attending the Puri Beach Festival.
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Jagannath Temple</strong>: A famous Hindu temple dedicated to Lord Jagannath.</li>
        <li><strong>Puri Beach</strong>: A wide sandy beach ideal for relaxing.</li>
        <li><strong>Konark Sun Temple</strong>: A historical temple with intricate carvings.</li>
        <li><strong>Chilika Lake</strong>: A large brackish water lagoon.</li>
        <li><strong>Raghurajpur Artisan Village</strong>: Known for its traditional handicrafts.</li>
    </ul>`;
    break;
case "kanyakumari":
    reply = `<p style="font-size: 17px;">The best time to visit Kanyakumari is <strong>October to March</strong>.
    Activities include visiting Vivekananda Rock, Thiruvalluvar Statue, and sunrise/sunset views.
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Vivekananda Rock Memorial</strong>: A monument dedicated to Swami Vivekananda.</li>
        <li><strong>Thiruvalluvar Statue</strong>: A large statue of the Tamil poet and philosopher.</li>
        <li><strong>Kanyakumari Beach</strong>: Where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.</li>
        <li><strong>Padmanabhapuram Palace</strong>: A historic palace nearby.</li>
        <li><strong>Suchindram Temple</strong>: An ancient temple with unique architectural features.</li>
    </ul>`;
    break;
case "ooty":
    reply = `<p style="font-size: 17px;">The best time to visit Ooty is <strong>March to June</strong>.
    Enjoy activities like visiting the Botanical Gardens, Nilgiri Mountain Railway, and tea plantations.
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Botanical Gardens</strong>: Known for its diverse plant species.</li>
        <li><strong>Nilgiri Mountain Railway</strong>: A scenic train ride through the hills.</li>
        <li><strong>Tea Plantations</strong>: Explore the lush tea estates.</li>
        <li><strong>Ooty Lake</strong>: Ideal for boating and picnics.</li>
        <li><strong>Doddabetta Peak</strong>: The highest point in the Nilgiris with panoramic views.</li>
    </ul>`;
    break;
case "manali":
    reply = `<p style="font-size: 17px;">The best time to visit Manali is <strong>March to June</strong> or <strong>October to February</strong>.
    Activities include adventure sports, Rohtang Pass visits, and exploring Solang Valley.
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Rohtang Pass</strong>: A high-altitude pass with snow-covered peaks.</li>
        <li><strong>Solang Valley</strong>: Known for adventure sports like paragliding.</li>
        <li><strong>Hadimba Temple</strong>: A unique wooden temple surrounded by forest.</li>
        <li><strong>Manu Temple</strong>: Dedicated to the sage Manu.</li>
        <li><strong>Old Manali</strong>: A charming area with traditional wooden houses and cafes.</li>
    </ul>`;
    break;
case "rajasthan":
    reply = `<p style="font-size: 17px;" >The best time to visit Rajasthan is <strong>October to March</strong>.
    Activities include exploring forts, camel safaris, and attending cultural festivals.
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Jaipur</strong>: Known for the Amber Fort and City Palace.</li>
        <li><strong>Udaipur</strong>: Famous for its lakes and palaces.</li>
        <li><strong>Jaisalmer</strong>: The Golden City with its fort and desert safaris.</li>
        <li><strong>Jodhpur</strong>: Home to the Mehrangarh Fort and Blue City.</li>
        <li><strong>Pushkar</strong>: Known for its annual camel fair.</li>
    </ul>`;
    break;
case "nainital":
    reply = `<p style="font-size: 17px;">The best time to visit Nainital is <strong>March to June</strong> or <strong>September to November</strong>.
    Activities include boating, trekking, and exploring Naini Lake.
    Major sightseeing spots include:</p>
    <ul>
        <li><strong>Naini Lake</strong>: The picturesque lake in the heart of the town.</li>
        <li><strong>Naina Devi Temple</strong>: A revered Hindu temple.</li>
        <li><strong>Snow View Point</strong>: Offers stunning views of the snow-capped peaks.</li>
        <li><strong>Tiffin Top</strong>: A viewpoint offering panoramic views of Nainital.</li>
        <li><strong>Zoo</strong>: Home to various species of animals and birds.</li>
    </ul>`;
    break;
case "dooars":
    reply = `<p style="font-size: 17px;">The best time to visit Dooars is <strong>October to May</strong>, when the weather is pleasant for exploring the wildlife and tea gardens. The region is known for its lush greenery and diverse wildlife:</p>
    <ul>
        <li><strong>Gorumara National Park</strong>: Famous for its population of Indian rhinoceroses and other wildlife, including elephants, bison, and leopards.</li>
        <li><strong>Buxa Tiger Reserve</strong>: A dense forest area that is home to tigers, elephants, and a variety of bird species.</li>
        <li><strong>Jaldapara Wildlife Sanctuary</strong>: Known for its population of one-horned rhinoceroses and a wide range of bird species.</li>
        <li><strong>Chilapata Forest</strong>: A dense forest corridor known for its rich biodiversity, including elephants and leopards.</li>
        <li><strong>Tea Gardens</strong>: Explore the sprawling tea gardens, which offer scenic beauty and a chance to learn about tea production.</li>
    </ul>`;
    break;
case "meghalaya":
    reply = `<p style="font-size: 17px;">The best time to visit Meghalaya is <strong>October to April</strong>. Known as the 'Abode of Clouds', Meghalaya is a land of stunning landscapes and unique culture:</p>
    <ul>
        <li><strong>Cherrapunji</strong>: One of the wettest places on earth, famous for its living root bridges, waterfalls, and lush greenery.</li>
        <li><strong>Shillong</strong>: The capital city known for its colonial architecture, scenic lakes, and vibrant markets.</li>
        <li><strong>Mawsynram</strong>: The wettest place on Earth, located near Cherrapunji, surrounded by lush green hills and waterfalls.</li>
        <li><strong>Dawki</strong>: Famous for its crystal-clear river and serene beauty, making it an ideal spot for boating and relaxation.</li>
        <li><strong>Nohkalikai Falls</strong>: One of the tallest waterfalls in India, located near Cherrapunji, offering breathtaking views.</li>
    </ul>`;
    break;
    case "darjeeling":
        reply = `<p style="font-size: 17px;">The best time to visit Darjeeling is from <strong>March to June</strong> and <strong>September to November</strong>. During these periods, you can enjoy a variety of activities and sightseeing spots:</p>
        <ul>
            <li><strong>Tiger Hill</strong>: Renowned for its breathtaking sunrise views over the Himalayas.</li>
            <li><strong>Batasia Loop</strong>: A unique circular railway track surrounded by beautiful gardens and scenic views.</li>
            <li><strong>Darjeeling Himalayan Railway</strong>: A UNESCO World Heritage Site, famous for its picturesque train journey.</li>
            <li><strong>Peace Pagoda</strong>: A serene Buddhist stupa offering panoramic views of Darjeeling.</li>
            <li><strong>Himalayan Mountaineering Institute</strong>: A museum and institute dedicated to the history and practice of mountaineering.</li>
            <li><strong>Padmaja Naidu Himalayan Zoological Park (Darjeeling Zoo)</strong>: Known for its conservation of endangered species like snow leopards, red pandas, and Himalayan wolves.</li>
        </ul>`;
        break;
        case "kashmir":
            reply = `<p style="font-size: 17px;">The best time to visit Kashmir is from <strong>March to May</strong> or <strong>June to August</strong>. Activities include shikara rides, houseboat stays, and exploring Gulmarg and Pahalgam. Major sightseeing spots include:</p>
            <ul>
                <li><strong>Srinagar</strong>: Known for its houseboats and Mughal gardens.</li>
                <li><strong>Gulmarg</strong>: A skiing destination with lush meadows.</li>
                <li><strong>Pahalgam</strong>: A scenic town offering trekking and fishing.</li>
                <li><strong>Sonamarg</strong>: Known for its glaciers and scenic landscapes.</li>
                <li><strong>Yusmarg</strong>: A beautiful meadow surrounded by pine forests.</li>
            </ul>`;
            break;
            case "lonavala":
    reply = `<p style="font-size: 17px;">The best time to visit Lonavala is from <strong>October to February</strong>. Activities include exploring Bhaja Caves, Bushi Dam, and trekking. Major sightseeing spots include:</p>
    <ul>
        <li><strong>Bushi Dam</strong>: A popular spot for monsoon picnics.</li>
        <li><strong>Bhaja Caves</strong>: Ancient rock-cut caves with Buddhist stupas.</li>
        <li><strong>Lonavala Lake</strong>: Ideal for a peaceful retreat.</li>
        <li><strong>Rajmachi Fort</strong>: A historic fort with trekking routes.</li>
        <li><strong>Karla Caves</strong>: Known for their intricate carvings and Buddhist architecture.</li>
    </ul>`;
    break;

            
            default:
                reply = `<p>Please enter a valid destination.</p>`;
                break;
        }

        setResponse(reply);
    };

    return (
        <div className="tourchat-container">
            <h1 className="tourchat-title">Interactive Travel Guide</h1>
            <p className="tourchat-description">Enter a destination to know the best time to visit, activities, and top sightseeing spots!</p>
            <div className="tourchat-input-group">
                <input
                    type="text"
                    placeholder="Enter Destination (e.g., Haridwar, Sikkim)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="tourchat-input"
                />
                <button onClick={handleDestination} className="tourchat-button">Get Info</button>
            </div>
            {response && <div className="tourchat-response" dangerouslySetInnerHTML={{ __html: response }} />}
        </div>
    );
};

export default Tourchat;


