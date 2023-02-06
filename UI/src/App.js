function App() {
  return (
    <div className="App">
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

      <link
        href="https://fonts.googleapis.com/css2?family=Fontdiner+Swanky&family=Lato&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap"
        rel="stylesheet"
      />

      <header class="header">
        <span class="the">The</span>
        <h1 id="title">
          Walk-In Dead Diner{' '}
          <span class="survey" id="survey">
            Survey
          </span>
        </h1>
        <p id="description">We want to know what you think!</p>
      </header>

      <div class="form">
        <form id="survey-form">
          <div>
            <label id="name-label" for="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-entry"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label id="email-label" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-entry"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label id="number-label" for="number">
              How many in your horde?
            </label>
            <input
              type="number"
              id="number"
              name="number"
              class="form-entry"
              placeholder="Number of Zombies"
              min="1"
              max="15"
              required
            />
          </div>

          <div>
            <label id="date-label" for="date">
              When did you visit us?
            </label>
            <input type="date" id="date" name="date" class="form-entry" required />
          </div>

          <div class="form-group">
            <p>Who was your server?</p>
            <select id="dropdown" name="server-name" class="form-entry" required>
              <option disable selected>
                Select Server Name
              </option>
              <option value="Sally">Sally</option>
              <option value="Pam">Pam</option>
              <option value="Billy-Sue">Billy Sue</option>
              <option value="Irene">Irene</option>
              <option value="Uknown">Uknown</option>
            </select>
          </div>

          <div class="form-group">
            <p>
              {' '}
              What did you have to eat? <span class="hint">(Check all that apply)</span>{' '}
            </p>

            <p id="apps">Appetizers</p>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="meal"
                  value="thight-meat-skewers"
                  class="input-checkbox"
                />
                Thigh Meat Skewers
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="meal"
                  value="roasted-eyeballs"
                  class="input-checkbox"
                />
                Roasted Eyeballs
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="meal"
                  value="deep-fried-ear-lobes"
                  class="input-checkbox"
                />
                Deep Fried Ear Lobes
              </label>
            </div>

            <p id="main">Mains</p>

            <div>
              <label>
                <input type="checkbox" name="meal" value="neck-bone-soup" class="input-checkbox" />
                Neck Bone Soup
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" name="meal" value="tongue-steaks" class="input-checkbox" />
                Tongue Steaks
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="meal"
                  value="kidney-parmesean"
                  class="input-checkbox"
                />
                Kidney Parmesan
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="meal" value="brain-scampi" class="input-checkbox" />
                Brain Scampi
              </label>
            </div>

            <p id="dess">Desserts</p>
            <div>
              <label>
                <input type="checkbox" name="meal" value="lady-fingers" class="input-checkbox" />
                Lady Fingers
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="meal"
                  value="bone-marrow-mousse"
                  class="input-checkbox"
                />
                Bone Marrow Mousse
              </label>
            </div>
          </div>

          <div class="form-group">
            <p>Would you reccomend The Walk-In Dead Diner to a friend?</p>
            <label>
              <input type="radio" name="recommend" value="yes" class="input-radio" />
              Yes
            </label>
            <label>
              <input type="radio" name="recommend" value="no" class="input-radio" />
              No
            </label>
            <label>
              <input type="radio" name="recommend" value="maybe" class="input-radio" />
              Maybe
            </label>
          </div>

          <div class="form-group">
            <p>Is there anything else you think we should know?</p>
            <textarea
              id="comments"
              class="input-textarea"
              name="comments"
              placeholder="Comments here..."
            ></textarea>
          </div>

          <div class="form-group">
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
