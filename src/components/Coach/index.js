import React from 'react';

function Coach({ coachClass }) {
  return (
    <div className={`coach coach_${coachClass}-class`}>
      <div className="coach__coach-side">
        <span>Начало вагона</span>
      </div>
      
      {/* FIRTS */}

      {coachClass === 'first' && (
        <div>
          <div className="coach__bottom-seats">
            <div className="coach__seat-number">1</div>
            <div className="coach__seat-number">2</div>
            <div className="coach__seat-number">3</div>
            <div className="coach__seat-number">4</div>
            <div className="coach__seat-number">5</div>
            <div className="coach__seat-number">6</div>
            <div className="coach__seat-number">7</div>
            <div className="coach__seat-number">8</div>
            <div className="coach__seat-number">9</div>
            <div className="coach__seat-number">10</div>
            <div className="coach__seat-number">11</div>
            <div className="coach__seat-number">12</div>
            <div className="coach__seat-number">13</div>
            <div className="coach__seat-number">14</div>
            <div className="coach__seat-number">15</div>
            <div className="coach__seat-number">16</div>
          </div>
          <div>
            <div className="coach__empty-cell_hallway"></div>
          </div>
          <div className="coach__side-seats">
            <div className="coach__side-seats_empty"></div>
          </div>
        </div>
      )}

      {/* SECOND */}

      {coachClass === 'second' && (
        <div>
          <div className="coach__top-seats">
            <div className="coach__seat-number coach__seat-number_disabled">2</div>
            <div className="coach__seat-number">4</div>
            <div className="coach__seat-number coach__seat-number_disabled">6</div>
            <div className="coach__seat-number coach__seat-number_selected">8</div>
            <div className="coach__seat-number">10</div>
            <div className="coach__seat-number">12</div>
            <div className="coach__seat-number coach__seat-number_selected">14</div>
            <div className="coach__seat-number">16</div>
            <div className="coach__seat-number">18</div>
            <div className="coach__seat-number">20</div>
            <div className="coach__seat-number">22</div>
            <div className="coach__seat-number">24</div>
            <div className="coach__seat-number">26</div>
            <div className="coach__seat-number">28</div>
            <div className="coach__seat-number">30</div>
            <div className="coach__seat-number">32</div>
          </div>
          <div className="coach__bottom-seats">
            <div className="coach__seat-number">1</div>
            <div className="coach__seat-number">3</div>
            <div className="coach__seat-number">5</div>
            <div className="coach__seat-number">7</div>
            <div className="coach__seat-number">9</div>
            <div className="coach__seat-number">11</div>
            <div className="coach__seat-number">13</div>
            <div className="coach__seat-number">15</div>
            <div className="coach__seat-number">17</div>
            <div className="coach__seat-number">19</div>
            <div className="coach__seat-number">21</div>
            <div className="coach__seat-number">23</div>
            <div className="coach__seat-number">25</div>
            <div className="coach__seat-number">27</div>
            <div className="coach__seat-number">29</div>
            <div className="coach__seat-number">31</div>
          </div>
          <div>
            <div className="coach__empty-cell_hallway"></div>
          </div>
          <div className="coach__side-seats">
            <div className="coach__side-seats_empty"></div>
          </div>
        </div>
      )}

      {/* THIRD */}

      {coachClass === 'third' && (
        <div>
          <div className="coach__top-seats">
            <div className="coach__seat-number coach__seat-number_disabled">2</div>
            <div className="coach__seat-number">4</div>
            <div className="coach__seat-number coach__seat-number_disabled">6</div>
            <div className="coach__seat-number coach__seat-number_selected">8</div>
            <div className="coach__seat-number">10</div>
            <div className="coach__seat-number">12</div>
            <div className="coach__seat-number coach__seat-number_selected">14</div>
            <div className="coach__seat-number">16</div>
            <div className="coach__seat-number">18</div>
            <div className="coach__seat-number">20</div>
            <div className="coach__seat-number">22</div>
            <div className="coach__seat-number">24</div>
            <div className="coach__seat-number">26</div>
            <div className="coach__seat-number">28</div>
            <div className="coach__seat-number">30</div>
            <div className="coach__seat-number">32</div>
          </div>
          <div className="coach__bottom-seats">
            <div className="coach__seat-number">1</div>
            <div className="coach__seat-number">3</div>
            <div className="coach__seat-number">5</div>
            <div className="coach__seat-number">7</div>
            <div className="coach__seat-number">9</div>
            <div className="coach__seat-number">11</div>
            <div className="coach__seat-number">13</div>
            <div className="coach__seat-number">15</div>
            <div className="coach__seat-number">17</div>
            <div className="coach__seat-number">19</div>
            <div className="coach__seat-number">21</div>
            <div className="coach__seat-number">23</div>
            <div className="coach__seat-number">25</div>
            <div className="coach__seat-number">27</div>
            <div className="coach__seat-number">29</div>
            <div className="coach__seat-number">31</div>
          </div>
          <div>
            <div className="coach__empty-cell_hallway"></div>
          </div>
          <div className="coach__side-seats">
            <div className="coach__seat-number coach__seat-number_disabled">33</div>
            <div className="coach__seat-number">34</div>
            <div className="coach__seat-number">35</div>
            <div className="coach__seat-number">36</div>
            <div className="coach__seat-number coach__seat-number_selected">37</div>
            <div className="coach__seat-number">38</div>
            <div className="coach__seat-number">39</div>
            <div className="coach__seat-number">40</div>
            <div className="coach__seat-number">41</div>
            <div className="coach__seat-number">42</div>
            <div className="coach__seat-number">43</div>
            <div className="coach__seat-number">44</div>
            <div className="coach__seat-number">45</div>
            <div className="coach__seat-number">46</div>
            <div className="coach__seat-number">47</div>
            <div className="coach__seat-number">48</div>
          </div>
        </div>
      )}

      {/* FOURTH */}

      {coachClass === 'fourth' && (
        <div>
          <div className="coach__fourth-class__row coach__first-row">
            <div className="coach__seat-number coach__seat-number_disabled">2</div>
            <div className="coach__seat-number">4</div>
            <div className="coach__seat-number coach__seat-number_disabled">6</div>
            <div className="coach__seat-number coach__seat-number_selected">8</div>
            <div className="coach__seat-number">10</div>
            <div className="coach__seat-number">12</div>
            <div className="coach__seat-number coach__seat-number_selected">14</div>
            <div className="coach__seat-number">16</div>
            <div className="coach__seat-number">18</div>
            <div className="coach__seat-number">20</div>
            <div className="coach__seat-number">22</div>
            <div className="coach__seat-number">24</div>
            <div className="coach__seat-number">26</div>
            <div className="coach__seat-number">28</div>
            <div className="coach__seat-number">30</div>
            <div className="coach__seat-number">32</div>
          </div>
          <div className="coach__fourth-class__row coach__second-row">
            <div className="coach__seat-number">1</div>
            <div className="coach__seat-number">3</div>
            <div className="coach__seat-number">5</div>
            <div className="coach__seat-number">7</div>
            <div className="coach__seat-number">9</div>
            <div className="coach__seat-number">11</div>
            <div className="coach__seat-number">13</div>
            <div className="coach__seat-number">15</div>
            <div className="coach__seat-number">17</div>
            <div className="coach__seat-number">19</div>
            <div className="coach__seat-number">21</div>
            <div className="coach__seat-number">23</div>
            <div className="coach__seat-number">25</div>
            <div className="coach__seat-number">27</div>
            <div className="coach__seat-number">29</div>
            <div className="coach__seat-number">31</div>
          </div>
          <div>
            <div className="coach__empty-cell_hallway"></div>
          </div>
          <div className="coach__fourth-class__row coach__third-row">
            <div className="coach__seat-number_empty"></div>
            <div className="coach__seat-number">34</div>
            <div className="coach__seat-number">36</div>
            <div className="coach__seat-number">38</div>
            <div className="coach__seat-number">40</div>
            <div className="coach__seat-number">42</div>
            <div className="coach__seat-number">44</div>
            <div className="coach__seat-number">46</div>
            <div className="coach__seat-number">48</div>
            <div className="coach__seat-number">50</div>
            <div className="coach__seat-number">52</div>
            <div className="coach__seat-number">54</div>
            <div className="coach__seat-number">56</div>
            <div className="coach__seat-number">58</div>
            <div className="coach__seat-number">60</div>
            <div className="coach__seat-number_empty"></div>
          </div>
          <div className="coach__fourth-class__row coach__fourth-row">
            <div className="coach__seat-number">33</div>
            <div className="coach__seat-number">35</div>
            <div className="coach__seat-number">37</div>
            <div className="coach__seat-number">39</div>
            <div className="coach__seat-number">41</div>
            <div className="coach__seat-number">43</div>
            <div className="coach__seat-number">45</div>
            <div className="coach__seat-number">47</div>
            <div className="coach__seat-number">49</div>
            <div className="coach__seat-number">51</div>
            <div className="coach__seat-number">53</div>
            <div className="coach__seat-number">55</div>
            <div className="coach__seat-number">57</div>
            <div className="coach__seat-number">59</div>
            <div className="coach__seat-number">61</div>
            <div className="coach__seat-number">62</div>
          </div>
        </div>
      )}
      <div className="coach__coach-side">
        <span>Конец вагона</span>
      </div>
    </div>
  );
}

export default Coach;
