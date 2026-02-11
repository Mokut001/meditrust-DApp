// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title MediTrust
 * @dev Smart contract for storing patient medical record hashes (IPFS)
 */
contract MediTrust {
    struct MedicalRecord {
        string ipfsHash;
        uint256 timestamp;
        address uploadedBy;
    }

    // Mapping from patient address to their list of records
    mapping(address => MedicalRecord[]) private patientRecords;

    event RecordAdded(address indexed patient, string ipfsHash, uint256 timestamp);

    /**
     * @dev Adds a new medical record hash for a specific patient.
     * @param _patient The wallet address of the patient.
     * @param _ipfsHash The IPFS CID of the medical document.
     */
    function addRecord(address _patient, string memory _ipfsHash) public {
        require(_patient != address(0), "Invalid patient address");
        require(bytes(_ipfsHash).length > 0, "Hash cannot be empty");

        patientRecords[_patient].push(MedicalRecord({
            ipfsHash: _ipfsHash,
            timestamp: block.timestamp,
            uploadedBy: msg.sender
        }));

        emit RecordAdded(_patient, _ipfsHash, block.timestamp);
    }

    /**
     * @dev Retrieves all record hashes for a specific patient.
     */
    function getRecords(address _patient) public view returns (MedicalRecord[] memory) {
        return patientRecords[_patient];
    }
}