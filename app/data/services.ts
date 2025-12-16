export const servicesList = [
    {
        category: "Laboratory Services",
        items: [
            { name: "Full Blood Count (FBC)", price: "GHS 50", tat: "1 Hour" },
            { name: "Malaria Parasite Test", price: "GHS 30", tat: "1 Hour" },
            { name: "Liver Function Test", price: "GHS 150", tat: "4 Hours" },
            { name: "Lipid Profile", price: "GHS 100", tat: "4 Hours" },
            { name: "Kidney Function Test", price: "GHS 100", tat: "4 Hours" },
            { name: "Widal Test (Typhoid)", price: "GHS 50", tat: "1 Hour" }
        ]
    },
    {
        category: "Specialized Diagnostics",
        items: [
            { name: "Hormonal Profile", price: "GHS 400", tat: "24 Hours" },
            { name: "Tumor Markers", price: "GHS 350", tat: "24 Hours" },
            { name: "HbA1c (Diabetes)", price: "GHS 120", tat: "2 Hours" },
            { name: "Semen Analysis", price: "GHS 200", tat: "24 Hours" }
        ]
    },
    {
        category: "Imaging & Others",
        items: [
            { name: "Ultrasound Scan", price: "GHS 150", tat: "Immediate" },
            { name: "Electrocardiogram (ECG)", price: "---", tat: "Immediate" },
            { name: "Medical Counselling", price: "---", tat: "immediate" }
        ]
    },
    {
        category: "Specialized Testing",
        items: [
            { name: "Paternity Testing (DNA Analysis)", price: "---", tat: "---" },
            { name: "Other DNA-based tests", price: "---", tat: "---" }
        ]
    }
];

export const getAllServices = () => {
    return servicesList.flatMap(category => 
        category.items.map(item => ({
            name: item.name,
            price: item.price,
            category: category.category
        }))
    );
};
