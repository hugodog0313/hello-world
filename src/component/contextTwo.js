
function ContextTwo() {
    return (
        <div className="wrapper">

            <div className="design-selection" id="design-selection">
                <h3 className="select">Select a Design:</h3>
                <nav role="navigation">
                    <ul>
                        <li>
                            <a href="/221/" className="design-name">Mid Century Modern</a> by						<a href="http://andrewlohman.com/" class="designer-name">Andrew Lohman</a>
                        </li>					<li>
                            <a href="/220/" className="design-name">Garments</a> by						<a href="http://danielmall.com/" class="designer-name">Dan Mall</a>
                        </li>					<li>
                            <a href="/219/" className="design-name">Steel</a> by						<a href="http://steffen-knoeller.de" class="designer-name">Steffen Knoeller</a>
                        </li>					<li>
                            <a href="/218/" className="design-name">Apothecary</a> by						<a href="http://trentwalton.com" class="designer-name">Trent Walton</a>
                        </li>					<li>
                            <a href="/217/" className="design-name">Screen Filler</a> by						<a href="http://elliotjaystocks.com/" class="designer-name">Elliot Jay Stocks</a>
                        </li>					<li>
                            <a href="/216/" className="design-name">Fountain Kiss</a> by						<a href="http://jeremycarlson.com" class="designer-name">Jeremy Carlson</a>
                        </li>					<li>
                            <a href="/215/" className="design-name">A Robot Named Jimmy</a> by						<a href="http://meltmedia.com/" class="designer-name">meltmedia</a>
                        </li>					<li>
                            <a href="/214/" className="design-name">Verde Moderna</a> by						<a href="http://www.mezzoblue.com/" class="designer-name">Dave Shea</a>
                        </li>					</ul>
                </nav>
            </div>

            <div className="design-archives" id="design-archives">
                <h3 className="archives">Archives:</h3>
                <nav role="navigation">
                    <ul>
                        <li className="next">
                            <a href="/214/page1">
                                Next Designs <span className="indicator">&rsaquo;</span>
                            </a>
                        </li>
                        <li className="viewall">
                            <a href="http://www.mezzoblue.com/zengarden/alldesigns/" title="View every submission to the Zen Garden.">
                                View All Designs							</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="zen-resources" id="zen-resources">
                <h3 className="resources">Resources:</h3>
                <ul>
                    <li className="view-css">
                        <a href="style.css" title="View the source CSS file of the currently-viewed design.">
                            View This Design&#8217;s <abbr title="Cascading Style Sheets">CSS</abbr>						</a>
                    </li>
                    <li className="css-resources">
                        <a href="http://www.mezzoblue.com/zengarden/resources/" title="Links to great sites with information on using CSS.">
                            <abbr title="Cascading Style Sheets">CSS</abbr> Resources						</a>
                    </li>
                    <li className="zen-faq">
                        <a href="http://www.mezzoblue.com/zengarden/faq/" title="A list of Frequently Asked Questions about the Zen Garden.">
                            <abbr title="Frequently Asked Questions">FAQ</abbr>						</a>
                    </li>
                    <li className="zen-submit">
                        <a href="http://www.mezzoblue.com/zengarden/submit/" title="Send in your own CSS file.">
                            Submit a Design						</a>
                    </li>
                    <li className="zen-translations">
                        <a href="http://www.mezzoblue.com/zengarden/translations/" title="View translated versions of this page.">
                            Translations						</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ContextTwo;