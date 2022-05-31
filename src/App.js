import figImg from './figshare.png';
import Footer from './components/Footer';
import SmiPred from './components/SmiPred';
import long_res from './pdfs/read_screen_result_long.pdf';
import middle_res from './pdfs/read_screen_result_middle.pdf'

function App() {
  return (
    <div className="App">
      <header>
        <div className="title">
          Machine-learning-assisted high-throughput screening for organic
          room-temperature phosphorescent molecules
        </div>
      </header>
      <main className="grid">
        <article>
          <h1>Prediction</h1>
          <SmiPred/>
          <h1>Introduction</h1>
          <p>
            This project is created for high-throughput screening of promising
            room temperature phosphorescence (RTP). The training set is collected
            from the literature, which is expanded to serve as a better sample of
            chemical space. The dataset for screening is from PubChem, which is
            converted to 45 million valid SMILES and uploaded to
            <a href="https://doi.org/10.6084/m9.figshare.19397522.v1" title="data from figshare"><img src={figImg}
              alt="figshare" className="fig" /></a>
            (as the data is large).
          </p>
          <div className="notecard">
            <p>
              <strong>Note</strong>: users need to download and unzip the
              compressed file to the folder <strong>smiles_bit_pickle</strong> if
              screening is required.
            </p>
          </div>

          
          <h2 id="req">Requirements</h2>
          <h2 id="pdf">PDFs</h2>
          <p>
            <a href={long_res}>See long class result (PDF, 5.93 MB)</a>
          </p>
          <p>
            <a href={middle_res}>See middle class result (PDF, 6.11 MB)</a>
          </p>
          <h2>E-mail</h2>
          <a href="mailto:iammyf@njtech.edu.cn">Send email to myf</a>
        </article>
        <aside className="toc">
          <h2>hi</h2>
        </aside>


      </main>
      <Footer />

    </div>
  );
}

export default App;
