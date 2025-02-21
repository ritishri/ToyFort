import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  // State to control visibility of stock options and hr
  const [showStockOptions, setShowStockOptions] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setShowStockOptions(!showStockOptions); // Toggle visibility of stock options
  };

  const [showDiscounts, setShowDiscounts] = useState(true); // Manage the visibility of the discounts section

  // Function to handle the toggle of the Discounts checkbox
  const handleDiscountToggle = (e) => {
    setShowDiscounts(e.target.checked);
  };

  const [showAge, setShowAge] = useState(true);

  const handleAgeToggle = (e) =>
  {
    setShowAge(e.target.checked);
  }

  const [showGender, setShowGender] = useState(true);

  const handleGenderToggle = (e) =>
  {
    setShowGender(e.target.checked);
  }


  return (
    <div>
      <p className="text-gray-500 mt-4 pl-6 text-sm">Home / Books</p>

      <h1 className="text-xl pl-6 font-medium mt-6">Books</h1>

      <p className="text-sm pl-6 mt-8 font-medium">Category</p>

      <p className="text-base pl-10 mt-5">Books</p>
      <p className="text-base pl-10 mt-2">Colouring Books</p>
      <p className="text-base pl-10 mt-2">Activity Books</p>
      <p className="text-base pl-10 mt-2">Sticker Books</p>
      <p className="text-base pl-10 mt-2">Musical Books</p>
      <p className="text-base pl-10 mt-2 mb-4">Story Books</p>

      <hr className="w-1/6 ml-6" />

      {/* Stock Checkbox and Price Section */}
      <div className="mt-5 pl-6 mb-4">
        {/* Checkbox for Stock */}
        <input
          className="font-medium rounded-sm"
          type="checkbox"
          id="checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox" className="font-medium ml-2">
          Stock
        </label>

        {/* Conditionally render stock options when "Stock" checkbox is checked */}
        {showStockOptions && (
          <div className="mt-2">
            <div>
              <input type="checkbox" id="outOfStock" />
              <label htmlFor="outOfStock" className="ml-2">
                Out of Stock
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="inStock" />
              <label htmlFor="inStock" className="ml-2">
                In Stock
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="allItems" />
              <label htmlFor="allItems" className="ml-2">
                All Items
              </label>
            </div>
          </div>
        )}

        {/* Conditional HR that appears above Price section */}
        {showStockOptions && <hr className="w-1/6 ml-0 mt-4" />}

        {/* Price Section */}
        <p className="font-medium mt-4 mb-3">Price</p>
        <div className="flex items-center gap-2">
          <div className="w-20">
            <label htmlFor="min" className="block text-s">
              Min
            </label>
            <input
              type="number"
              id="min"
              placeholder="Min"
              className="w-full border border-gray-300 p-1 rounded mt-1 text-s"
            />
          </div>
          <div className="w-20">
            <label htmlFor="max" className="block text-s">
              Max
            </label>
            <input
              type="number"
              id="max"
              placeholder="Max"
              className="w-full border border-gray-300 p-1 rounded mt-1 text-s"
            />
          </div>
          {/* Arrow icon beside max input */}
          <button className="p-2 border bg-gray-100">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <hr className="w-1/6 ml-6" />

      <div className="pl-6 mt-5 font-medium mb-4">
        <h1 className="font-medium mb-4">Brands</h1>

        {/* Scrollable Brands Section */}
        <div
          className="pl-6 max-h-40 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400"
          style={{ width: "200px" }}
        >
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Abracadabra</p>
          <p className="font-medium mb-2">Adidas</p>
          <p className="font-medium mb-2">Aditi Toys</p>
          <p className="font-medium mb-2">Aiko</p>
          <p className="font-medium mb-2">Alexa</p>
          <p className="font-medium mb-2">Alter</p>
          <p className="font-medium mb-2">Anam</p>
          <p className="font-medium mb-2">Annie</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Aayushi</p>
        </div>
      </div>

      <hr className="w-1/6 ml-6" />

      <p className="pl-6 font-medium mt-5">Characters</p>
      <p className="pl-10 font-medium mt-5 mb-7">Princess</p>

      <hr className="w-1/6 ml-6" />

      <div className="mt-5">
      
      {/* Discounts checkbox */}
      <div className="pl-6">
        <input
          type="checkbox"
          id="discounts-checkbox"
          checked={showDiscounts}
          onChange={handleDiscountToggle}
          className="mr-2"
        />
        <label htmlFor="discounts-checkbox" className="font-medium">
          Discounts
        </label>
      </div>


      {/* Discount options will appear only if the checkbox is checked */}
      {showDiscounts && (
        <div className="pl-10 mt-3">
          <div>
            <input type="checkbox" id="discount1" />
            <label htmlFor="discount1" className="ml-2">50-100%</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="discount2" />
            <label htmlFor="discount2" className="ml-2">40-50%</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="discount3" />
            <label htmlFor="discount3" className="ml-2">30-40%</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="discount4" />
            <label htmlFor="discount4" className="ml-2">20-30%</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="discount5" />
            <label htmlFor="discount5" className="ml-2">0-20%</label>
          </div>
        </div>
      )}
    </div>

     <hr className="w-1/6 mt-5 ml-6"/>

    <div className="mt-5">
      
      {/* Gender checkbox */}
      <div className="pl-6">
        <input
          type="checkbox"
          id="gender-checkbox"
          checked={showGender}
          onChange={handleGenderToggle}
          className="mr-2"
        />
        <label htmlFor="gender-checkbox" className="font-medium">
          Gender
        </label>
      </div>


      {/* Discount options will appear only if the checkbox is checked */}
      {showGender && (
        <div className="pl-10 mt-3">
          <div>
            <input type="checkbox" id="gender1" />
            <label htmlFor="gender1" className="ml-2">Boys</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="gender2" />
            <label htmlFor="gender2" className="ml-2">Girls</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="gender3" />
            <label htmlFor="gender3" className="ml-2">Unisex</label>
          </div>
        </div>
      )}
    </div>

    <hr className="w-1/6 mt-5 ml-6"/>

    <div className="mt-5">
      
      {/* Age checkbox */}
      <div className="pl-6">
        <input
          type="checkbox"
          id="age-checkbox"
          checked={showAge}
          onChange={handleAgeToggle}
          className="mr-2"
        />
        <label htmlFor="age-checkbox" className="font-medium">
          Age
        </label>
      </div>


      {/* Discount options will appear only if the checkbox is checked */}
      {showAge && (
        <div className="pl-10 mt-3">
          <div>
            <input type="checkbox" id="age1" />
            <label htmlFor="age1" className="ml-2">0-18 M</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="age2" />
            <label htmlFor="age2" className="ml-2">18-36 M</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="age3" />
            <label htmlFor="age3" className="ml-2">3-5 Y</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="age4" />
            <label htmlFor="age4" className="ml-2">5-8 Y</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="age5" />
            <label htmlFor="age5" className="ml-2">-12 Y</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="age6" />
            <label htmlFor="age6" className="ml-2">12+ Y</label>
          </div>
        </div>
      )}
    </div>







     </div>
  );
};

export default Sidebar;
