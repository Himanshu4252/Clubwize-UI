'use client'
import React, { useState, ChangeEvent, FormEvent  } from 'react';
import upDownImg from '@/public/ProjectsImg/updown.png';
import Image, {StaticImageData} from 'next/image';
import { Lock, prof1 } from '@/app/Components/searchPanel/photos';
import { Cross } from '@/app/Components/searchPanel/photos';
import style from './style.module.css'

interface RuleSection {
  id: number;
  title: string;
  description: string;
  postedDate: string;
  userImage: StaticImageData;
  userName:string;
  subSections: {
    id: number;
    title: string;
    type: string;
    privacy: string;
  privacyIcon: StaticImageData|null,
  }[];
}


interface FileInputEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & { files: FileList | null };
}


const rules: RuleSection[] = [
  {
    id: 1,
    title: 'Code of Conduct',
    description: 'Creating a code of conduct for a social media group is essential to maintain a positive and respectful online community.',
    postedDate: 'Jan-13-2022',
    userImage: prof1,
    userName: 'Leslie Alexendar',
    subSections: [
      { id: 1, title: 'Hospital', type:'Domain', privacy:'private',  privacyIcon: Lock},
      { id: 2, title: 'Infection Control', type:'Category',privacy:'', privacyIcon: null },
      { id: 3, title: 'Gardener', type: 'applicable for', privacy:'', privacyIcon: null},
    ],
  },
  {
    id: 2,
    title: 'Hand Hygiene',
    description: 'All staff, visitors, and patients must practice proper hand hygiene. All staff, visitors, and patients must practice proper hand hygiene.All staff, visitors, and patients must practice proper hand hygiene. All staff, visitors, and patients must practice proper hand hygiene.',
    postedDate: 'Jul-15-2022',
    userImage: prof1,
    userName: 'Leslie Alexendar',
    subSections: [
        { id: 1, title: 'Hospital', type:'Domain', privacy:'private', privacyIcon: Lock },
        { id: 2, title: 'Infection Control', type:'Category', privacy:'', privacyIcon: null},
        { id: 3, title: 'Gardener', type: 'applicable for', privacy:'', privacyIcon: null},
    ],
  },
  {
    id: 3,
    title: 'Isolation Precaution',
    description: 'Use appropriate PPE based on the level of contact with patients, such as gloves, gowns, masks, and eye protection.',
    postedDate: 'Jan-12-2024',
    userImage: prof1,
    userName: 'Leslie Alexendar',
    subSections: [
        { id: 1, title: 'Hospital', type:'Domain', privacy:'private', privacyIcon: Lock},
        { id: 2, title: 'Infection Control', type:'Category', privacy:'', privacyIcon: null},
        { id: 3, title: 'Gardener', type: 'applicable for',  privacy:'', privacyIcon: null},
    ],
  }
];

const RuleTable: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [reportBox, setReportBox] = useState(false);

  const handleReportClick =() =>{
    setReportBox(!reportBox);
  }

  const toggleDetails = (rowIndex: number) => {
    setSelectedRow(selectedRow === rowIndex ? null : rowIndex);
  };

  const [offenderName, setOffenderName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  // Handle file input change
  const handleFileChange = (e: FileInputEvent): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (!offenderName || !description || !file) {
      alert('Please fill out all fields and upload a document');
      return;
    }

    // Logic to handle form submission (e.g., send to API)
    const formData = new FormData();
    formData.append('offenderName', offenderName);
    formData.append('description', description);
    formData.append('file', file);

    console.log('Form Submitted:', {
      offenderName,
      description,
      file
    });

    // You can now send this formData to an API
  };


  return (
    <>
      <table className={style.table}>
        <thead className={style.tableHead}>
          <tr>
            <th className={style.tableHeadCell} style={{ width: '5%' }}>No.</th>
            <th className={style.tableHeadCell} style={{ width: '25%', display:"flex", alignItems:"center", textWrap:"nowrap" }}>
              Rule Title
              <Image src={upDownImg} width={7} height={7} className="ml-2" alt="rulesImage" />
            </th>
            <th className={style.tableHeadCell} style={{ width: '50%' }}>Description</th>
            <th className={style.tableHeadCell} style={{ display:"flex", alignItems:"center", textWrap:"nowrap"  }}>
              Posted Date
              <Image src={upDownImg} width={7} height={7} className="ml-2" alt="rulesImage" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <React.Fragment key={rule.id}>
              <tr onClick={() => toggleDetails(rule.id)} className={style.tableRow}>
                <td className={style.tableCellNo} style={{ width: '5%' }}>{rule.id}</td>
                <td className={style.tableCellTitle} style={{ width: '25%' }}>{rule.title}</td>
                <td className={style.tableCellDescription} style={{ width: '50%' }}>
                    <div className={style.tableTextWrapper}>
                    {rule.description}
                    </div>
                </td>
                <td className={style.tableCellDate} style={{ width: '20%' }}>{rule.postedDate}</td>
              </tr>
              {selectedRow === rule.id && (
                <>
                  {rule.subSections.map((subSection, index) => (
                    <tr key={subSection.id} className={style.tableSubsection}>
                      <td style={{ width: '5%' }}></td>
                      <td className={style.SubsecTitle} style={{ width: '25%' }}>
                        <div className={style.subsecBox}>
                        <p className={style.domain}>{subSection.type}</p>
                        <p className={style.subTitle}>{subSection.title}</p>
                        </div>
                         </td>
                      {index === 0 && (
                        <td
                          rowSpan={rule.subSections.length}
                          className={style.SubsecDesCell}
                          style={{ width: '50%', verticalAlign: 'top' }}
                        >
                          {rule.description}
                        </td>
                      )}
                      <td className={style.privacy} style={{ width: '20%' }}>
                      {subSection.privacyIcon ? (
        <Image src={subSection.privacyIcon} alt="Privacy Icon" />
         ) : (null)}
                        {subSection.privacy}
                      </td>
                    </tr>
                  ))}
                  <tr className={style.tableAction}>

                    <td colSpan={4} >
                        <div className={style.tableBottomWrapper}>
                        <div className={style.Tablebottom}>
                        <Image src={rule.userImage} alt='user IMage' className={style.userPhoto}/>
                        <p className={style.userName}>{rule.userName}</p>
                        </div>
                      <div className={style.tableActionContent}>
                        <button className={style.relevant}>168 of 323 find it relevant</button>
                        <button className={style.originalBtn}>View Original</button>
                        <button className={style.reportBtn} onClick={handleReportClick} >Report Offense</button>
                      </div>
                      </div>
                    </td>
                  </tr>
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {reportBox ? (<>
        <div className={style.reportOffWrapper}>
      <div className={style.reportOffBox}>
        <div className={style.offenceReport}>
          <p className={style.offenceBoxHead}>Report Offence</p>
         <div style={{padding:'5px'}} onClick={handleReportClick}> <Image src={Cross} alt='cross icon'/></div>
        </div>

        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formGroup}>
            <label className={style.label}>Offender Name</label>
            <input
              type="text"
              value={offenderName}
              onChange={(e) => setOffenderName(e.target.value)}
              placeholder="Enter name"
              required
              className={style.inputField}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label}>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write here..."
              required
              className={style.inputField}
            />
          </div>

          <div className={style.inputFile}>
            <label className={style.label}>Proof</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="application/pdf, image/*"
              required
              className={style.inputFileField}
              placeholder='+ Upload file'
            />
          </div>

          <div className={style.buttonGroup}>
            <button type="button" className={style.cancelButton} onClick={handleReportClick}>Cancel</button>
            <button type="submit" className={style.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </div>
      </>):(null)}
    </>
  );
};

export default RuleTable;
