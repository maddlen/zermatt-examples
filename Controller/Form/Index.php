<?php
/**
 * @author Hervé Guétin <www.linkedin.com/in/herveguetin>
 */

namespace Maddlen\ZermattExamples\Controller\Form;

use Maddlen\ZermattForm\FormRules\FormRulesAbstract;
use Magento\Framework\Phrase;
use Magento\Framework\Validator\EmailAddress;
use Magento\Framework\Validator\NotEmpty;

class Index extends FormRulesAbstract
{
    public function rules(): array
    {
        return [
            'name' => [NotEmpty::class],
            'email' => [NotEmpty::class, EmailAddress::class]
        ];
    }

    public function redirectUrl(): string
    {
        return $this->url->getUrl('zermatt_examples');
    }

    public function getSuccessMessage(): ?Phrase
    {
        return __('Form is valid');
    }
}
